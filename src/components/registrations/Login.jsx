import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()

  const onSubmit =async (data) => {
    try{
         
        if (data.Email==='superadmin123@gmail.com'&& data.Password==='12345678' ) {
          alert("Successfully loggedin")
          localStorage.setItem('token','abdcssasdssddsdsdsaa')
          navigate("/members")
  
        } else{
          alert("Please make sure Superadmin and Password are correct")
        }
       
    
    }catch(err){
      console.log(err)
    }
   
    
 
  }
  return (
    <div>
      <div className="register">
      <div className="img">
        <img src="/img/trustlogo.jpg" alt="notfound" />
      </div>
      <div className="form">
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Please fill the login form </h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" ,'@media (max-width: 820px)': {
                width: '35ch',
                marginLeft:'30px'
              }},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              {...register("Email")}
              label="Email"
              variant="outlined"
            />
            <TextField
              id="filled-basic"
              {...register("Password")}
              label="Password"
              variant="outlined"
            />
          

    
          </Box>
          <div className="loginsubmit">
          <input className="submit" value="Login" type="submit" />
          <p><Link style={{textDecoration:'none'}} to="/register">Be a member</Link></p>
          </div>
          
        </form>
      </div>
    </div>
  
    </div>

  )
}

export default Login