import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    token: null,
  },
  reducers: {
    setData: (state, { payload }) => {
      state.userData = payload;
    },
    setUpdateData: (state, { payload }) => {
      state.userData = [...state.userData, payload];
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { setData, setUpdateData, setToken } = userSlice.actions;
export default userSlice.reducer;
