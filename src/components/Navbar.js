import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarItems } from "../helpers/NavbarItems";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <nav className="navbarItems">
      <h1 className="nav-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map((item, key) => {
          return (
            <li key={item.id}>
              <NavLink to={item.url} className={item.cName}>
                <FontAwesomeIcon icon={item.icon} />
                {item.name}
              </NavLink>
            </li>
          );
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
