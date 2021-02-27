import React from "react";

// css
import "../css/Card.css";

const Card = (props) => {
  return (
    <a href={props.link} className="news__card">
      <img className="news__img" src={props.img} alt="" />
      <div className="news__detail">
        <h1>{props.heading}</h1>
        <p>{props.detail}</p>
      </div>
    </a>
  );
};

export default Card;
