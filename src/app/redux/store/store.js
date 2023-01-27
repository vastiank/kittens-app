import { configureStore } from "@reduxjs/toolkit";
import kittensReducer from "../slices/kittenSlice";

const store = configureStore({
  reducer: {
    kittens: kittensReducer,
  },
});

export default store;
