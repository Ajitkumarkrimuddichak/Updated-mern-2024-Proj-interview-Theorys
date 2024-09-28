import React from "react";
import "./inputs.module.css";

const Input = ({ type, placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};

export default Input;
