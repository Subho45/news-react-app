import React from "react";

// css
import "../css/FullNews.css";

const FullNews = (props) => {
  return (
    <div className="full__news">
      <h1>{props.heading}</h1>
      <img src={props.img} alt="" />
      <p>{props.description}</p>
      <div>
        <p>{props.publish}</p>
        <p>~ {props.author}</p>
      </div>
    </div>
  );
};

export default FullNews;
