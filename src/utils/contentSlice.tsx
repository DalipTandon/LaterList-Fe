import { createSlice } from "@reduxjs/toolkit";


const contentSlice=createSlice({
    name:"content",
    initialState:[],
    reducers:{
      //  @ts-ignore
        addContent:(state,action)=>{
            return action.payload;
        },
        removeContent: (state, action) => {
            //@ts-ignore
            return state.filter((content) => content._id !== action.payload);
        },
    }
})
export const{addContent,removeContent}=contentSlice.actions;
export default contentSlice.reducer;