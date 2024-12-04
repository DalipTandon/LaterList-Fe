import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice"
import userReducer from "./userSlice"
const appStore=configureStore({
    reducer:{
        content:contentReducer,
        user:userReducer
    }
});
export default appStore;