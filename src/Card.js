import React from "react";
import "./Card.css";

const Card = (props) => {
  <div className="news__card">
    <img className="news__img" src="" alt="" />
    <div className="news__detail">
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
    </div>
  </div>;
};
export default Card;
