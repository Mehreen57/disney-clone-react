import React from 'react';
import styled from 'styled-components'

 const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="login cta"/>
        <SignUp>Get All There</SignUp>
        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy is simply dummy
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="login cta" />
      </CTA>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
 

    &:before{
      content: "";
      position: absolute;
      inset: 0;
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      background: url("/images/login-background.jpg");
      z-index: -1;
      opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    background: #0063E5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
      background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`