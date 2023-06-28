import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user.slice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;
