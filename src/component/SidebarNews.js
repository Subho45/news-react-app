import React from "react";

// css
import "../css/SidebarNews.css";

const SidebarNews = (props) => {
  return (
    <div className="sidebar__detail">
      <img className="sidebar__detail__img" src={props.bbcImg} alt="" />
      <h1 className="sidebar__detail__heading">{props.bbcHeading}</h1>
    </div>
  );
};

export default SidebarNews;
