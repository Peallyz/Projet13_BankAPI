import { createSlice } from "@reduxjs/toolkit";
import login from "../asyncActions/login";
import signUp from "../asyncActions/signUp";
import getProfile from "../asyncActions/getProfile";
import updateProfile from "../asyncActions/updateProfile";

const initialState = {
  username: null,
  firstname: null,
  lastname: null,
  token: null,
  signInStatus: null,
  signUpStatus: null,
  getProfileStatus: null,
  updateProfileStatus: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // Reducers are functions that take the current state and an action object, and then return a new state.
  reducers: {
    signOut: () => initialState,
  },
  // Extra Reducers are used here to update the state according external async evenements.
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.username = payload?.payload?.email;
        state.token = payload?.data?.body?.token;
        state.signInStatus = payload?.data?.status;
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
        state.getProfileStatus = 500;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.firstname = payload?.body?.firstName;
        state.lastname = payload?.body?.lastName;
        state.updateProfileStatus = payload?.data?.status;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.username = null;
        state.updateProfileStatus = 500;
      });
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
