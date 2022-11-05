import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate();
  return (
    <div>
    <MainHeader>
     <NavLink to="/">
    <img src='./images/logo.png' alt='logo' className='logo'/>
    </NavLink>
    <NavBar />
    </MainHeader>
    <Wrapper className='e-btn-group'>
          <Button onClick={()=>navigate('/')}>Resource</Button>
          <Button onClick={()=>navigate('/user')}>User</Button>
          <Button onClick={()=>navigate('/Request')}>Request</Button>
    </Wrapper>
  </div>
    
  )
}

const MainHeader= styled.header`
padding: 0 4.8rem;
background-color:white;
box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
display:flex ;
justify-content: space-between;
align-items: center;
.logo{
    max-width:50%;
    height:auto;
}
`
const Wrapper=styled.section`
display:flex;
justify-content:center;
padding-top:4rem;
`
const Button=styled.button`
background-color:${({theme})=>theme.colors.bg};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 2px solid #555555
`

export default Header