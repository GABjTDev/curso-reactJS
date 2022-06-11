import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  users: [],
  error: null,
};

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    usersPending: (state) => {
      state.status = "pending";
      state.users = [];
      state.error = null;
    },
    UsersSuccess: (state, action) => {
      state.status = "completed";
      state.users = action.payload.users;
      state.error = null;
    },
    UsersError: (state, action) => {
      state.status = "fail";
      state.users = null;
      state.error = action.payload.message;
    },

    getUsers() {},
  },
});

export const { usersPending, UsersSuccess, UsersError, getUsers } =
  usersSlice.actions;
export default usersSlice.reducer;
