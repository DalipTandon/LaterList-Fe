import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        //@ts-ignore
        addUser:(state,action)=>{
            return action.payload;
        },
         //@ts-ignore
        removeUser:()=>{
            return null;
        }
    }
})

export const{addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;