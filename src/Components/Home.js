import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../App.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigationOne = useNavigate();
  const navigationTwo = useNavigate();
  return (
    <div>
    <Box>
    <Container className='rounded shadow p-3 my-3'>
    <Typography variant = "h1" className='text-center'>
    <u>  This is Our Home Page</u>
    </Typography>  
    <img className='image' src='https://cdn.dribbble.com/users/1480043/screenshots/3175346/bagley_dektop.gif'/>
    <div className='buttons'>
    <button onClick={(() => {navigationOne("/")})} className='btn btn-outline-primary p-4'>Back to SignUp page</button>
    </div>
    </Container>  
    </Box>   
    </div>
  )
}

export default Home
