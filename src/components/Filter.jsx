import React from "react";
import "./Filter.scss";
import { useDispatch } from "react-redux";
import { FilteredCategoryProducts } from "../redux/ProductSlice";
import WomenImg from "../assets/dress.png";
import ManImg from "../assets/man.png";
import JeweleryImg from "../assets/diamond-ring.png";
import ElektronicsImg from "../assets/analytics.png";

export default function Filter() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(FilteredCategoryProducts(e));
  };

  return (
    <div className="filter">
      <div className="filter-item">
        <img src={ElektronicsImg} alt="elektronics" />
        <button onClick={() => handleClick("electronics")}>electronics</button>
      </div>

      <div className="filter-item">
        <img src={WomenImg} alt="women's dress img" />
        <button onClick={() => handleClick("women's clothing")}>
          women's clothing
        </button>
      </div>
      <div className="filter-item">
        <img src={JeweleryImg} alt="jewelery img" />

        <button onClick={() => handleClick("jewelery")}>jewelery</button>
      </div>

      <div className="filter-item">
        <img src={ManImg} alt="man dress img" />
        <button onClick={() => handleClick("men's clothing")}>
          men's clothing
        </button>
      </div>
    </div>
  );
}
