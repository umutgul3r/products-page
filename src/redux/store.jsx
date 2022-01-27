import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

export default configureStore({
  reducer: {
    product: ProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
