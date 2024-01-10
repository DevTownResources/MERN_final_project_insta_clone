import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (curState, action) => {
      curState.user = action.payload;
      curState.isAuthenticated = true;
    },
  },
});

export default authSlice.reducer;

export const { login } = authSlice.actions;
