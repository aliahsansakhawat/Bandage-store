import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  SingleProduct: null,
  isLoading: false,
  isError: "",
};
// this is our action to fetch API-----
export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
});
export const fetchProductById = createAsyncThunk(
  "fetchProductById",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  }
);

const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });

    // action for second API
    builder.addCase(fetchProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.SingleProduct = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default apiSlice.reducer;
