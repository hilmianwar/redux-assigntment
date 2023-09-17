import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slice/loginSlice";
import userReducer from "../slice/userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
