import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    setInitData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setInitData, setDataUpdate } = userSlice.actions;
export default userSlice.reducer;
