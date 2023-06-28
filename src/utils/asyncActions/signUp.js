import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_SINGUP } from "../config";

const signUp = createAsyncThunk("user/signup", async (payload) => {
  const response = await fetch(URL_SINGUP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
    }),
  });

  const data = await response.json();
  return { data, payload };
});

export default signUp;
