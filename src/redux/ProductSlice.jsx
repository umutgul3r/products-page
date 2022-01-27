import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  basket: [],
  filteredProducts: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Products: (state, action) => {
      state.products = action.payload;
    },
    FilteredProducts: (state, action) => {
      const products = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLocaleLowerCase())
      );
      state.filteredProducts = products;
    },
    FilteredCategoryProducts: (state, action) => {
      const filteredPro = state.products.filter((item) =>
        item.category.toLowerCase().includes(action.payload.toLocaleLowerCase())
      );
      state.filteredProducts = filteredPro;
    },
    AddBasket: (state, action) => {
      if (!state.basket.find((e) => e.id === action.payload.id)) {
        state.basket.push(action.payload);
      } else {
        alert("this product already add to cart");
      }
    },
    RemoveBasketItem: (state, action) => {
      const removedArr = [...state.basket].filter(
        (item) => item.id !== action.payload
      );
      state.basket = removedArr;
    },
  },
  extraReducers: {},
});

export const {
  Products,
  FilteredProducts,
  FilteredCategoryProducts,
  AddBasket,
  RemoveBasketItem,
} = ProductSlice.actions;
export default ProductSlice.reducer;
