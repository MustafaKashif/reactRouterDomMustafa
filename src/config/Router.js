import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Home';
import { Switch } from '@mui/material';

const AppRouter = () => {
  return (
    <div>
  <BrowserRouter>
  <nav className='rounded shadow py-0'>
<ul className='navbar '>
    <li><Link to = "homepage">Home</Link>{" "}</li>
    <li><Link to = "">Signup</Link>{" "}</li>
    <li><Link to = "loginpage">Login</Link>{" "}</li>
</ul>
  </nav>
  <Routes>
    <Route path = 'loginpage' element = {<Login/>}/>
    <Route path = '' element = {<Signup/>}/>
    <Route path = 'homepage' element = {<Home/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default AppRouter
