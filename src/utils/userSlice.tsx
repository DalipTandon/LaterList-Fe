import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    //@ts-ignore
    initialState: JSON.parse(localStorage.getItem("user")) || null, 
    reducers: {
        addUser: (state, action) => {
            const user = action.payload;
            localStorage.setItem("user", JSON.stringify(user)); 
            return user;
        },
        removeUser: () => {
            localStorage.removeItem("user"); 
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
