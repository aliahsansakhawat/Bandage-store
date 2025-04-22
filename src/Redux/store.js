import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Slices/sliceApi";
import cartReducer from "./Slices/cartSlice";
import addFavourite from "./Slices/addFavouriteSlice";
export const store = configureStore({
  reducer: {
    products: apiReducer,
    addToCart: cartReducer,
    AddToFavourite: addFavourite,
  },
});
