import React, { useState } from 'react'
import {  Button, Grid,TextField,Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';




const Login = () => {
     
    const[inputs,setInputs]=useState({});
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const submitHandler=()=>{
        console.log('btn clicked',inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res.data.message);
            if(res.data.message==="login successfull"){
                alert("Login Successfull")
                navigate('/view')
            }
        })
    }
  return (
    <div>
        <Typography variant='h3' style={{color:"purple"}}>
        LOG IN FORM
        </Typography>
         <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label='username' fullWidth
                name='username' onChange={inputHandler}/>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label='password' fullWidth
                name='password' onChange={inputHandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Button variant='contained' color='secondary' onClick={submitHandler}>submit
     
    </Button>
            </Grid>
            <Grid item sx={12} sm={12} md={12}>
                <Link to={'/sign'}>New user click here</Link>
            </Grid>
        
    </div>
  )
}


export default Login
