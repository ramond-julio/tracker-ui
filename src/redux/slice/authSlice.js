import { createSlice } from "@reduxjs/toolkit";

//Initial state
const authSlice = createSlice({
    name:'auth',
    initialState:{
        user: null
    },
    reducers: {
        loginAction: (state,action) => {
            state.user = action.payload;
        },
        logoutAction: (state,action) => {
            state.user = null;
        }
    }
});
//generate actions
export const { loginAction, logoutAction } = authSlice.actions;
//generate reducers
const authReducer = authSlice.reducer;
export default authReducer;