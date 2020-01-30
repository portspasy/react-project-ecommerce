import React from "react";
import { Link } from "react-router-dom";

// ReactComponent as Logo to import SVG
import { ReactComponent as Logo } from "../../assets/crown.svg"

import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
        <Logo />
    </Link>
  </div>
);

export default Header;
