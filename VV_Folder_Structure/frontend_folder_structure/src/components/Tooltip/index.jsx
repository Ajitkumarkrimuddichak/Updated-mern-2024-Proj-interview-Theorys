import React from "react";
import "./tooltip.module.css";

const Tooltip = ({ message, children }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{message}</span>
    </div>
  );
};

export default Tooltip;
