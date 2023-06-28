import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_PROFILE } from "../config";

const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (payload) => {
    const response = await fetch(URL_PROFILE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${payload.token}`,
      },
      body: JSON.stringify({
        firstName: payload.firstname,
        lastName: payload.lastname,
      }),
    });

    const data = await response.json();
    return data;
  }
);

export default updateProfile;
