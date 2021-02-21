import React from "react";

// css
import "../css/Weather.css";

const Weather = (props) => {
  return (
    <div className="weather__section">
      <h1 className="weather__heading">Today's weather brodcast</h1>
      <div className="weather__detail__section">
        <div className="weather__detail">
          <p>{props.name}</p>
          <p>{props.temp}</p>
          <p>{props.description}</p>
        </div>
        <img src={props.icon} alt="" />
      </div>
    </div>
  );
};

export default Weather;
