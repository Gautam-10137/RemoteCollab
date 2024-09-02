import {createSlice} from "@reduxjs/toolkit";
import {getAuthToken} from "";
import axiosApi from "";
import {jwtDecode} from "";

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

export const register=(name,email,password)=>async(dispatch)=>{
  const body=JSON.stringify({name,email,password});
  try{
  const res=await axiosApi('',body);
  dispatch(registerSucess(res.data));
  }
  catch(err){
    dispatch(authError());
  }
};

export const login=(email,password)=>async(dispatch)=>{
  const body=JSON.stringify({email,password});
  try{
    const res=await axiosApi('',body);
    dispatch(loginSuccess(res.data));
    dispatch(loadUser());
  }
  catch(err){
    dispatch(authError());
  }
};




