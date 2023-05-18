import { configureStore } from "@reduxjs/toolkit";
import { eCommerce } from "./reducers";
export const store = configureStore({
  reducer: {eCommerce},
});
