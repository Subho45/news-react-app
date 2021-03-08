import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "../css/Header.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = (props) => {
  // navbar open or not value
  const [isOpen, setIsOpen] = useState(false);

  return (
    // navbar
    <div className="header">
      {/* logo */}
      <NavLink className="logo" to="/">
        TechNews
      </NavLink>

      {/* nav links */}
      <ul className={isOpen ? "nav__list nav__list__active" : "nav__list"}>
        <li className="nav__item">
          <NavLink
            exact
            activeClassName="nav__active"
            className="nav__link"
            to="/"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Top News
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            activeClassName="nav__active"
            className="nav__link"
            to="/technology"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Technology
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            activeClassName="nav__active"
            className="nav__link"
            to="/bussiness"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Bussiness
          </NavLink>
        </li>
      </ul>

      {/* nav icon */}
      <div
        className="nav__icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Header;
