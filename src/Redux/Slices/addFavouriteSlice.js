import { createSlice } from "@reduxjs/toolkit";

const savedFavourites = localStorage.getItem("favouriteItems");
const addFavouriteSlice = createSlice({
  name: "AddToFavourite",
  initialState: {
    favouriteItems: savedFavourites ? JSON.parse(savedFavourites) : [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const favourite = action.payload;
      const exists = state.favouriteItems.find(
        (find) => find.id === favourite.id
      );
      if (exists) {
        alert("Item is already in the cart,Do you want to add again?");
        state.favouriteItems.push(favourite);
      } else {
        state.favouriteItems.push(favourite);
      }
      localStorage.setItem(
        "favouriteItems",
        JSON.stringify(state.favouriteItems)
      );
    },
    removeFromFavourite: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(
        (i) => i.id !== action.payload
      );
      localStorage.setItem(
        "favouriteItems",
        JSON.stringify(state.favouriteItems)
      );
    },
    removeAllFromFavourite: (state) => {
      state.favouriteItems = [];
      localStorage.removeItem("favouriteItems"); // Or set to empty array
    },
  },
});
export default addFavouriteSlice.reducer;
export const { addToFavourite, removeFromFavourite, removeAllFromFavourite } =
  addFavouriteSlice.actions;
