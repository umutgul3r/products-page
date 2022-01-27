import React from "react";
import "./Home.scss";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="section">
        <Filter />
        <Products />
      </div>
    </>
  );
}
