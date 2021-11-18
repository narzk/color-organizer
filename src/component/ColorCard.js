import React, { useState } from "react";
import "../styles/colorCard.css";
export const ColorCard = ({ color, title }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="container-card">
      <div
        className="color-card"
        style={{ background: `${color}`, opacity: `${hover ? 0.5 : 1}` }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && color}
      </div>
      {/* <div className="color-title">{title}</div> */}
    </div>
  );
};
