import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <NavLink className="logo" to="/">
        TechNews
      </NavLink>
      <div className="search__bar">
        <input
          placeholder="Search news"
          type="text"
          className="search__input"
        />
        <button className="search__icon">Search</button>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            exact
            activeClassName="nav__active"
            className="nav__link"
            to="/"
          >
            Top News
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            activeClassName="nav__active"
            className="nav__link"
            to="/technology"
          >
            Technology
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            activeClassName="nav__active"
            className="nav__link"
            to="/bussiness"
          >
            Bussiness
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
