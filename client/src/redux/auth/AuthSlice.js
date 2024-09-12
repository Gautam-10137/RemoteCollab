import {createSlice} from "@reduxjs/toolkit";
import {setAuthToken} from "../../utils/utils";
import axiosApi from "../../axios/api";
import {jwtDecode} from "jwt-decode";
import axios from "axios";


const initialState={
  token:localStorage.getItem('token'),
  isAuthenticated:null,
  loading:false,
  user:null
};


const authSlice=createSlice({
  name:"auth",
  initialState,
  reducers:{
    userLoaded:(state,action)=>{
      state.isAuthenticated=true,
      state.loading=false,
      state.user=action.payload.user
    },
    registerSucess:(state,action)=>{
      state.loading=false,
      state.user=action.payload.user
    },
    loginSuccess:(state,action)=>{
      state.isAuthenticated=true,
      state.loading=false,
      state.user=action.payload.user,
      state.token=action.payload.token,
      localStorage.setItem('token',action.payload.token)
    },
    authError:(state,action)=>{
      state.isAuthenticated=false,
      state.loading=false,
      state.user=null,
      state.token=null,
      localStorage.removeItem('token'),
      setAuthToken(null);
    },
  },
});


export const{
  userLoaded,
  registerSucess,
  loginSuccess,
  authError
}=authSlice.actions;      // these are the actions which we will use in our components

export default authSlice.reducer;


export const loadUser=()=>async(dispatch)=>{
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  try{
    const Token=localStorage.getItem('token');
    const user=jwtDecode('token');
    dispatch(userLoaded(user));
  }
  catch(err){
    dispatch(authError());
  }
};

export const register=({username,email,password})=>async(dispatch)=>{
  const body=JSON.stringify({username,email,password});
  try{
  const res=await axiosApi.post("auth/register", body);
  // console.log(res.data);
  dispatch(registerSucess(res.data));
  }
  catch(err){
    dispatch(authError());
  }
};

export const login=({email,password})=>async(dispatch)=>{
  const body=JSON.stringify({email,password});
  // console.log(body);
  try{
    const res=await axiosApi.post('auth/login',body);
    // console.log(res.data);
    dispatch(loginSuccess(res.data));
    dispatch(loadUser());
  }
  catch(err){
    dispatch(authError());
  }
};




