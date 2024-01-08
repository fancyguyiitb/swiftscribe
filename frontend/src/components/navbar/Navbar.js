import React, { useState } from "react";

import "./style.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* <Link to="/" className="title">
        Website
      </Link> */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Stocks">Stock Market</NavLink>
        </li>
        <li>
          <NavLink to="/Technology">Technology</NavLink>
        </li>
        <li>
          <NavLink to="/Politics">Politics</NavLink>
        </li>
        <li>
          <NavLink to="/Education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/Health">Health</NavLink>
        </li>
        <li>
          <NavLink to="/Must Read">Must Read</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
