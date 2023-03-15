import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          alt=""
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        ></img>
      </Link>
    </nav>
  );
}

export default Header;
