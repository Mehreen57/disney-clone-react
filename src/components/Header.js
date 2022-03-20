import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { signInWithPopup, signOut} from "firebase/auth";
import { auth, provider } from '../firebase';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { async } from '@firebase/util';

const Header = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();
  
    useEffect(()=>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/");
            }
        })
    }, [])

    // sign in fucntion
    const signIn = () => {
       signInWithPopup(auth, provider)
       .then((result) => {
           let user = result.user
           dispatch(setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL
           }))
           navigate('/');
       })
    }


    // signout the user from account
    const signOutUser = () => {
        signOut(auth, provider)
        .then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

  return (
    <Nav>
        <Logo src='/images/logo.svg' />
        {   !userName ? (
            <LoginContainer>
                <Login onClick={signIn}>Login</Login>
            </LoginContainer>
             ) :
            <>
                <NavMenu>
                    <a href=" ">
                        <img src='/images/home-icon.svg' alt="home"/>
                        <span>home</span>
                    </a>
                    <a href=" ">
                        <img src='/images/search-icon.svg' alt="search"/>
                        <span>search</span>
                    </a>
                    <a href=" ">
                        <img src='/images/watchlist-icon.svg' alt="watchlist"/>
                        <span>watchlist</span>
                    </a>
                    <a href=" ">
                        <img src='/images/original-icon.svg' alt="originals"/>
                        <span>originals</span>
                    </a>
                    <a href=" ">
                        <img src='/images/movie-icon.svg' alt="movies"/>
                        <span>movies</span>
                    </a>
                    <a href=" ">
                        <img src='/images/series-icon.svg' alt="series"/>
                        <span>series</span>
                    </a>
                </NavMenu>
                <UserImg src= {userPhoto} onClick={signOutUser} alt={userName} referrerpolicy="no-referrer"/>
            </>
        }
    </Nav>
  )

}
export default Header;

// Styled components
const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 75px;
    background: #090b13;
    padding: 0 36px;
    overflow: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;  

    a{
        display:flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 0 12px;

        img{
            height: 20px;
        }
        span{
            font-size: 12px;
            position: relative;

            &:after{
                content: "";
                background: #fff;
                height: 2px;
                position: absolute;
                bottom: -6px;
                left: 0;
                right: 0;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login  = styled.div`
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`
