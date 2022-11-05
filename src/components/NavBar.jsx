import { Avatar, Button } from '@mui/material';
import styled from 'styled-components';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const Nav = styled.nav`
    .navbar-list{
        display:flex;
        gap: 4.8rem ;
        li{
            list-style:none;
        }
    }
    `
    const navigate = useNavigate();
    return (
        <Nav>
            <div>
                <ul className='navbar-list'>
                    <li>
                        <Button color='success' variant='contained' onClick={() =>navigate('/add')}>Add Item</Button>
                    </li>
                    <li>
                        <Avatar src='./images/image.png' />
                    </li>
                </ul>
            </div>
        </Nav>
    )

}

export default NavBar