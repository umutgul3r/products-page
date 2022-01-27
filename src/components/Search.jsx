import React from "react";
import { useDispatch } from "react-redux";
import { FilteredProducts } from "../redux/ProductSlice";
import SearchIcon from "../assets/search.png";
import "./Search.scss";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(FilteredProducts(e.target.value));
  };

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-term"
          placeholder="What are you looking for?"
          onChange={handleChange}
        />
        <button type="submit" className="searchButton">
          <img src={SearchIcon} alt="search img" />
        </button>
      </div>
    </div>
  );
}
