import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: localStorage.getItem("user") ? true : false,
  },
  reducers: {
    login: (state, payload) => {
      state.isLogin = true;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.removeItem("user");
    },
    signUp: (state, payload) => {
      state.isLogin = true;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});

export const { login, logout, signUp } = userSlice.actions;

export default userSlice.reducer;
