import { createSlice } from "@reduxjs/toolkit";


const feed=createSlice({
    name:"feed",
    initialState:[],
    reducers:{
      //  @ts-ignore
        addFeed:(state,action)=>{
            return action.payload;
        },
        
    }
})
export const{addFeed}=feed.actions;
export default feed.reducer;