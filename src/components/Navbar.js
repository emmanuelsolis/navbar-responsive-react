import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    console.log("clicked", clicked)
    const handleClick = () => {
        //cuando esta true lo cambia a false y viceversa
        setClicked(!clicked)
    }

  return (
    <>
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
            <div className={`links ${clicked ? 'active': ''}`}>
                 <a onClick={handleClick} href="#h">Home</a>
                 <a onClick={handleClick} href="#h">Shop</a>
                 <a onClick={handleClick} href="#h">About</a>
                 <a onClick={handleClick} href="#h">Contact</a>
                 <a onClick={handleClick} href="#h">Blog</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`bg ${clicked ? 'active': ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
padding: 0.5rem;
background: #000;
display: flex;
align-items: center;
justify-content: space-between;
h2 {
    font-weight: 400;
    color: #fff;
    span {
    font-weight: bold;
    }
}
a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right:0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 1.2s ease-in-out;
    a {
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 768px) {
        position: initial;
        margin: 0;
        a {
            font-size: 1rem;
            color : #fff;
            display: inline-block;
        }
        display: block;
    }
}

.links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top:30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
}
.burguer {
    @media(min-width: 768px) {
        display: none;
    }
}
`	
const BgDiv = styled.div`
background-color: #222;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.9s ease-in-out;
    &.active {
        border-radius: 0 0 60% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`