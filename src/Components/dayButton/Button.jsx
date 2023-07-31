import React from "react";
import "../../Components/dayButton/button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { day, route } = props.data;
  return (
    <div className="day-button-div">
      <Link to={route}>
        <button className="btn">Day {day}</button>
      </Link>
    </div>
  );
};

export default Button;
