import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid
    ,Box,Container,Typography} from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/userSlice';


const RegisterPage = () => {
const [form,setForm]=useState({
    name:"",
    email:"",
    password:""
})
const dispatch=useDispatch();

const handelChange=(e)=>{
    e.preventDefault();
    setForm({...form,[e.target.name]:e.target.value})
}

const registerHandler=(e)=>{
    e.preventDefault();
    dispatch(register(form))
}

  return (
    <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={registerHandler}>
          <TextField
          onChange={handelChange}
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
            onChange={handelChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            onChange={handelChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>  
         
            <Grid container>
              
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
      </div>
  )
}

export default RegisterPage