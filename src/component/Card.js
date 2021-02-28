import React from "react";

// css
import "../css/Card.css";

const Card = (props) => {
  return (
    <div className="news__card" onClick={props.fullNews}>
      <img className="news__img" src={props.img} alt="" />
      <div className="news__detail">
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export default Card;
