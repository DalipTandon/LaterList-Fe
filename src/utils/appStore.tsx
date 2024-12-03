import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice"

const appStore=configureStore({
    reducer:{
        content:contentReducer
    }
});
export default appStore;