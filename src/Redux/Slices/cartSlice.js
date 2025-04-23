import { createSlice } from "@reduxjs/toolkit";

// Step 1: Load initial state from localStorage (if available)
const savedCartItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: savedCartItems ? JSON.parse(savedCartItems) : [],  // Hydrate from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((find) => find.id === item.id);
      if (exist) {
        alert("Do you want to add it again?");
        state.cartItems.push(item);
      } else {
        state.cartItems.push(item);
      }

      // Sync updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      // Sync updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeAllItems: (state) => {
      state.cartItems = [];

      // Clear cart from localStorage
      localStorage.removeItem("cartItems");
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeAllItems } = cartSlice.actions;
