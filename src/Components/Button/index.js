import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { label, type, color, onClick } = props;
  const buttonStyle = `btn btn-${color} search__btn`;

  return (
    <button type={type} className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};
Button.defaultProps = {
  type: "button",
  color: "secondary",
  label: "My Button",
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
