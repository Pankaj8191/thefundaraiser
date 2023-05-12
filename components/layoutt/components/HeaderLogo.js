import React from 'react'
import styled from 'styled-Components';

const HeaderLogo = () => {

    const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    font-family: 'Poppins';

`
  return (
    <>
        <Logo>The-fundraiser</Logo>
    </>
  )
}


export default HeaderLogo