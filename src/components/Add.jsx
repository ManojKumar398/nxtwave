import React from 'react'
import {  Link, NavLink } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import { Avatar, Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
  const [itemname, setItemname] = useState('');
  const [link, setLink] = useState('');
  const [resourcename, setResourcename] = useState('');
  const [description, setDescripton] = useState('');      
    const submitDetails =  () => {
    const users = {
      itemname: itemname,
      link: link,
      resourcename: resourcename,
      description: description
    }
    console.log(users);
      let errora=true;
      const isValid = formValidation();
      isValid ?  axios.post("https://media-content.ccbp.in/website/react-assignment/add_resource.json",users)
      : errora=false;
     toastify(errora); 
     setItemname('');
     setLink('');
     setResourcename('');
     setDescripton('');
  }

  const toastify=(errora)=>{
    errora ? toast.success("Successfully Submitted",{
      position: toast.POSITION.BOTTOM_CENTER
    }): toast.error("Error: Please fill Form Properly",{
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
    const formValidation = () => {
      let isValid = true;
      if (itemname.trim().length <1 || link.trim().length <1 || resourcename.trim().length <1 || description.trim().length <1) {
        isValid = false;
      }
      return isValid;
    }
    return (
      <div>
        <MainHeader>
          <NavLink to="/">
            <img src='./images/logo.png' alt='logo' className='logo' />
          </NavLink>
          <nav>
            <div>
              <ul className='navbar-list'>

                <li>
                  <Avatar src='./images/image.png' />
                </li>
              </ul>
            </div>
          </nav>
        </MainHeader>
        <NavLink to='/'><p><VscChevronLeft />Users</p></NavLink>
        <Wrapper>
          <div className="container">
            <h2 className="common-heading">ITEM DETAILS</h2>
            <div className="contact-form">
              <form className="contact-inputs"  >
                <label>ITEM NAME</label>
                <input
                  type="text"
                  id="itemname"
                  name="itemname"
                  placeholder="ITEM NAME"
                  autoComplete="off"
                 value={itemname}
                 onChange={(e) => setItemname(e.target.value)}
                 
                />
                <label>LINK</label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  placeholder="LINK"
                  autoComplete="off"
                  value={link}
                 onChange={(e) => setLink(e.target.value)}
                 
                />
                <label>RESOURCE NAME</label>
                <input
                  type="text"
                  id="resourcename"
                  name="resourcename"
                  placeholder="RESOURCE NAME"
                  autoComplete="off"
                  value={resourcename}
                 onChange={(e) => setResourcename(e.target.value)}
                  
                />
                <label>DESCRIPTION</label>
                <input
                  id="description"
                  name="description"
                  placeholder="DESCRIPTION"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  value={description}
                 onChange={(e) => setDescripton(e.target.value)}
                 />
                <Button  variant='contained'  onClick={()=>submitDetails()}>Create</Button>
              </form>
            </div>
          </div>
          <img src='./images/image9.png' alt='img' />
        </Wrapper>
        <ToastContainer />
      </div>
    )
  }

const MainHeader = styled.header`
padding: 0 4.8rem;
background-color:white;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
display:flex ;
justify-content: space-between;
align-items: center;
.logo{
    max-width:50%;
    height:auto;
}
.navbar-list{
  display:flex;
  gap: 4.8rem ;
  li{
      list-style:none;
  }
}
`
  const Wrapper = styled.section`
    padding:  0 ;
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: row;
    img{
      max-width:50%;
    }
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          input{
            margin: 0.5rem 0;
          }
          }
        }
      }
    }
    @media (max-width:${({ theme }) => theme.media.mobile}) {
      img{
        display:none;
      }
    }
  `;
  export default Add