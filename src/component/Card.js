import React from "react";

// css
import "../css/Card.css";

const Card = (props) => {
  return (
    <div className="news__card">
      <img className="news__img" src={props.topImg} alt="" />
      <div className="news__detail">
        <h1>{props.topHeading}</h1>
        <p>{props.topDetail}</p>
      </div>
    </div>
  );
};

export default Card;
