import { createSlice } from "@reduxjs/toolkit";


const initialState={
    token:"",
    user:"",
    tempuser:{}
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state,action)=>{
            state.token=action.payload.token;
        },
        userLoggedIn:(state,action)=>{
            state.token=action.payload.accessToken;
            state.user=action.payload.user;
        },
        userLoggedOut:(state,action)=>{
            state.token="";
            state.user="";
        },
        userTemporary:(state,action)=>{
            tempuser=action.payload.user;

        }

    }
})

export const {userRegistration,userLoggedIn,userLoggedOut}=authSlice.actions;
export default authSlice.reducer