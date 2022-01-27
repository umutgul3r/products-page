import React, { useEffect, useState } from "react";
import product from "./data/products-list.json";
import Home from "./pages/Home";
import { Products, FilteredProducts } from "./redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Products(product));
    dispatch(FilteredProducts(""));
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}
