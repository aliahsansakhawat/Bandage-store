import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    // length: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((find) => find.id === item.id);
      if (exist) {
        alert("Do you want add again?");

        state.cartItems.push(item);
      } else {
        state.cartItems.push(item);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    removeAllItems: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeAllItems } = cartSlice.actions;
