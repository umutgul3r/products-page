import React from "react";
import "./Header.scss";
import Logo from "../assets/logo.png";

import Basket from "./Basket";
import Search from "./Search";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-side">
        <img className="logo" src={Logo} alt="logo" />
        <span className="logo-title">Pinsoft</span>
      </div>

      <div className="left">
        <Search />
      </div>
      <div className="right">
        <Basket />
      </div>
    </div>
  );
}
