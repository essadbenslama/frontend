import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setCredentials } from "./authSlice";


export const register=createAsyncThunk("user/register",async(payload)=>{
    axios.defaults.withCredentials=true;
    try {const {data}=await axios.post("http://localhost:5000/api/users/",payload)
    toast.success('registered Successfully')
        return data;
    } catch (error) {
        toast.error (error.response.data.message)
        
    }
})

export const login=createAsyncThunk("user/login",async({form,navigate},{rejectWithValue,dispatch,getState})=>{
    axios.defaults.withCredentials=true;
    try {
        const {data}=await axios.post("http://localhost:5000/api/users/auth",form)
        .then((res)=>{
            dispatch(setCredentials(res.data));
        })
        .then(()=>{
            toast.success('loggedIn Successfully')
            navigate("/")
        })
        toast.success('loggedIn Successfully')
        navigate("/")
        return data
    } catch (error) {toast.error(error.response.data.message)
        
    }
})


const userSlice=createSlice({
    name:"user",
    initialState:{},
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.loading=false;
            state.registerUser=action.payload;
        })
        builder.addCase(register.rejected,(state)=>{
            state.loading=false;
        })
        /////////
        builder.addCase(login.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            state.loggedUser=action.payload;
        })
        builder.addCase(login.rejected,(state)=>{
            state.loading=false;
        })
    }
})


export default userSlice.reducer