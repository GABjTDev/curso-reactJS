import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  token: null,
  error: null,
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    pending: (state) => {
      state.status = "pending";
      state.token = null;
      state.error = null;
    },
    success: (state, action) => {
      state.status = "completed";
      state.token = action.payload.token;
      state.error = null;
    },
    logout: () => initialState,
    error: (state, action) => {
      state.status = "fail";
      state.token = null;
      state.error = action.payload.message;
    },

    startLogin() {},
  },
});

export const { pending, success, logout, error, startLogin } =
  loginSlice.actions;
export default loginSlice.reducer;
