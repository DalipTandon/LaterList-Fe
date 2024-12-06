import { createSlice } from "@reduxjs/toolkit";

interface Content {
    _id: string;
    title: string;
    type: string;
    link?: string;
    tags?: string[];
    createdAt?: string;
  }
  type ContentState = Content[];

const contentSlice=createSlice({
    name:"content",
    initialState:[]as ContentState,
    reducers:{
        addContent:(state,action)=>{
          //  console.log("Payload ", action.payload);
            const payload = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.push(...payload);            
        },
        removeContent: (state, action) => {
            return state.filter((content) => content._id !== action.payload);
        },
    }
})
export const{addContent,removeContent}=contentSlice.actions;
export default contentSlice.reducer;