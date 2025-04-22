import { createSlice } from "@reduxjs/toolkit";

const addFavouriteSlice = createSlice({
  name: "AddToFavourite",
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const favourite = action.payload;
      const exists = state.favouriteItems.find(
        (find) => find.id === favourite.id
      );
      if (exists) {
        // alert("Item is already in the cart,Do you want to add again?");
        state.favouriteItems.push(favourite);
      } else {
        state.favouriteItems.push(favourite);
      }
    },
    removeFromFavourite: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(
        (i) => i.id !== action.payload
      );
    },
    removeAllFromFavourite: (state) => {
      state.favouriteItems = [];
    },
  },
});
export default addFavouriteSlice.reducer;
export const { addToFavourite, removeFromFavourite, removeAllFromFavourite } =
  addFavouriteSlice.actions;
