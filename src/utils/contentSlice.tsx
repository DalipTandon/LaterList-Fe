import { createSlice } from "@reduxjs/toolkit";


const contentSlice=createSlice({
    name:"content",
    initialState:null,
    reducers:{
      //  @ts-ignore
        addContent:(state,action)=>{
            return action.payload;
        }
    }
})
export const{addContent}=contentSlice.actions;
export default contentSlice.reducer;