import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import authReducer from "./authSlice";

const store = configureStore({
reducer:{movie:movieReducer , user:userReducer,auth:authReducer }


})
export default store;