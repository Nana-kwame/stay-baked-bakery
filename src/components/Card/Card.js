import React from "react";
import "./Card.scss";

const Card = ({ style, children }) => {
  return (
    <div style={style} className="card">
      {children}
    </div>
  );
};

export default Card;
