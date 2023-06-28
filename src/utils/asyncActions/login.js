import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_LOGIN } from "../config";

const login = createAsyncThunk("user/login", async (payload) => {
  const response = await fetch(URL_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });

  const data = await response.json();
  return { data, payload };
});

export default login;
