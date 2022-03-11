import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
        <Logo src='/images/logo.svg' />
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
        <UserImg src="https://i.pravatar.cc/150?img=8" />
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