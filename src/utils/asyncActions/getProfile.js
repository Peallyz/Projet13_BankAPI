import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_PROFILE } from "../config";

const getProfile = createAsyncThunk("user/getProfile", async (payload) => {
  const response = await fetch(URL_PROFILE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload}`,
    },
  });

  const data = await response.json();
  return data;
});

export default getProfile;
