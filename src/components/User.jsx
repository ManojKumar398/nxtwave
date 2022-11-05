import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const User = () => {
  const [resource, setResource] = useState([])
  const [searchterm, setSearchTerm] = useState('');
  const getApi = async () => {
    try {
      const response = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json");
      setResource(response.data);
    } catch (error) {
      console.log("error while fetching", error);
    }
  }
  useEffect(() => {
    getApi();
  }, [])
  return (
    <div>
      <Header />
      <Wrapper>
      <form className="search" >
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder='Search by Resouce Name'
                    autoComplete='off'
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
            </form>
      <div className='container grid grid-three-column'>
        {
          resource
          .filter((e) => {
            if(searchterm==="" &&  e.tag === "user"){
              return e;
            } else if(e.title.toLowerCase().includes(searchterm.toLowerCase()) && e.tag === "user"){
              return e;
            }
          })
          .map(e=>(
            <div className='card' key={e.id}>
              <div className='cardheader'>
                <img src={e.icon_url} alt='icon'/>{e.title}
               
                <p>{e.category}</p>
              </div>
              <div className='cardbody'>
                <Link>{e.link}</Link>
                <p>{e.description}</p>
              </div>
            </div>
          ))
        }
        
      </div>
      </Wrapper>
    </div>
    

  )
}
const Wrapper=styled.section`
padding: 5rem 0;
.container{
  max-width:120 rem;
}
form{
  padding: 5rem 5rem;
  font-size: 1rem;
  input{
    width: 20%;
  border: 2px solid #000;
  overflow: hidden;
  font-size: 1rem;
  }
}
.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .cardbody {
    padding: 0 2rem;
  }
  .cardheader {
    padding: 0 2rem;
    p{
        color: #7E858E;
      }
  }
img{
  max-width:30%;
  margin-top:1rem;
  height:auto;
  padding-right: 2rem;

}
`
export default User