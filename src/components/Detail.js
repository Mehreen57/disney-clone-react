import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


 const Detail = () => {
     const  { id } = useParams();
     const [ movie, setMovie ] = useState({})

    // render data on start of page load 
     useEffect(()=>{
       const getMovie = async (userInputId) => {
           try{
                const getMovieList = collection(db, "movies");
                const querySnapshot = await getDocs(getMovieList);
                querySnapshot.forEach((doc) => {
                   if(doc.id === userInputId){
                     setMovie(doc.data())
                    }
                })
           }
           catch(error){
                alert(error.message)
            }
       }
        getMovie(id);
     }, [])

  return (
    <Container>
        <Background>
            <img src={movie.backgroundImg} alt={movie.title}/>
        </Background>
        <ImageTitle>
            <img src={movie.titleImg} alt={movie.title}/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt={movie.title}/>
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png" alt={movie.title} />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" alt={movie.title}/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            {movie.subTitle}
        </SubTitle>
        <Description>
        {movie.description}
        </Description>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }   
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 10.625rem;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    margin: 0 16px;
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: #fff;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgba(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.5;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 560px;
`