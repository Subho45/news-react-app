import React from "react";

// css
import "../css/Banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1 className="banner__heading">{props.bannerHeading}</h1>
      <img className="banner__img" src={props.bannerImg} alt="" />
    </div>
  );
};

export default Banner;
