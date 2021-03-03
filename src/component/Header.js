import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../css/Header.css";

const Header = (props) => {
  return (
    // navbar
    <div className="header">
      {/* logo */}
      <NavLink className="logo" to="/">
        TechNews
      </NavLink>

      {/* searchbar */}
      <div className="search__bar">
        <input
          placeholder="Search news"
          type="text"
          className="search__input"
          onChange={props.getNews}
        />
        <button className="search__icon" onClick={props.setNews}>
          Search
        </button>
      </div>

      {/* nav links */}
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
