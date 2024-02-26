import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid
    ,Box,Container,Typography} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
    const [form,setForm]=useState({email:"",
password:""})

const changeHandler=(e)=>{
    e.preventDefault();
    setForm({...form,[e.target.name]:e.target.value})
}
const loginHandler=(e)=>{
    e.preventDefault();
    dispatch(login({form,navigate}));
    
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
            Sign In
          </Typography>
          <Box
          onSubmit={loginHandler} component="form"  noValidate sx={{ mt: 1 }} >
            <TextField
            onChange={changeHandler}
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
           onChange={changeHandler}
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
              Sign IN
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/register" variant="body2">
                  {" Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>

    </div>
  )
}

export default LoginPage