import React from "react";
import "../styles/navBar.css";
export const NavBar = ({ onchange }) => {
  return (
    <div className="nav">
      <img src="/colorPallete.png" />
      <input
        placeholder="    type here ..."
        onChange={(e) => onchange(e.target.value)}
      />
    </div>
  );
};
