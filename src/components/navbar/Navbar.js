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
          <NavLink to="/stocks">Stock Market</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
        <li>
          <NavLink to="/politics">Politics</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/health">Health</NavLink>
        </li>
        <li>
          <NavLink to="/mustread">Must Read</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
