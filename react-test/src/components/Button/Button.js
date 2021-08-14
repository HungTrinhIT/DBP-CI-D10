import React from "react";
import "./Button.css";
const Button = ({ text, className, color, ...props }) => {
  return (
    <button
      className={`${className} custom-btn`}
      {...props}
      style={{ background: `${color}`, opacity: `${props.disabled ? 0.5 : 1}` }}
    >
      {text}
    </button>
  );
};
export default Button;
