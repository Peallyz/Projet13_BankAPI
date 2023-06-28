import { createSlice } from "@reduxjs/toolkit";
import login from "../asyncActions/login";
import signUp from "../asyncActions/signUp";
import getProfile from "../asyncActions/getProfile";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    firstname: null,
    lastname: null,
    token: null,
    signInStatus: null,
    signUpStatus: null,
    getProfileStatus: null,
  },
  reducers: {
    signOut: (state) => {
      state.username = null;
      state.firstname = null;
      state.lastname = null;
      state.token = null;
      state.signInStatus = null;
      state.signUpStatus = null;
      state.getProfileStatus = null;
    },
    resetSignUpStatus: (state) => {
      state.signUpStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.username = payload.payload.email;
        state.token = payload?.data?.body?.token;
        state.signInStatus = payload.data.status;
      })
      .addCase(login.rejected, (state) => {
        state.username = null;
        state.token = null;
        state.signInStatus = 500;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.username = payload.payload.email;
        state.signUpStatus = payload.data.status;
      })
      .addCase(signUp.rejected, (state) => {
        state.username = null;
        state.signUpStatus = 500;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.firstname = payload?.body?.firstName;
        state.lastname = payload?.body?.lastName;
        state.getProfileStatus = payload?.data?.status;
      })
      .addCase(getProfile.rejected, (state) => {
        state.username = null;
        state.getProfile = 500;
      });
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
