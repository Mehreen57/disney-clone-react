import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';

export default function NewDisney() {
    const movies = useSelector(selectNewDisney);

  return (
    <Container>
        <h4>New to Disney+</h4>
        <Content>
            {   movies && movies.map((movie, key) => (
                     <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))
            }
        </Content>
    </Container>
  )
}

const Container = styled.div`
    padding: 0 0 26px;
`
const Content = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    // padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0 16px 10px -10px;
    overflow: hidden;
    // position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        // position: absolute;
        // inset: 0;
        // display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 500ms ease-in-out 0s;
        // z-index: 1;
        // top: 0;
    }  

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0 30px 22px -10px;
    }
`