import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../utils/constants";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const validateToken = createAsyncThunk(
  "auth/validateToken",
  async () => {
    try {
      const res = await fetch(`${SERVER_URL}/api/auth/validate-session`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        return data;
      }
      return {};
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (curState, action) => {
      curState.user = action.payload;
      curState.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateToken.fulfilled, (curState, action) => {
      curState.user = action.payload;
      curState.isAuthenticated =
        Object.keys(action.payload).length > 0 ? true : false;
    });
    builder.addCase(logout.fulfilled, (curState, action) => {
      if (action.payload) {
        curState.user = null;
        curState.isAuthenticated = false;
      }
    });
  },
});

export default authSlice.reducer;

export const { login } = authSlice.actions;
