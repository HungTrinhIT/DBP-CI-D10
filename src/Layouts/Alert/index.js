import React from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  const { msg, type } = props;
  return (
    <div className={`alert alert-${type} mt-3`}>
      <p>{msg}</p>
    </div>
  );
};

Alert.defaultProps = {
  type: "danger",
  msg: "Something wrong",
};
Alert.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string,
};

export default Alert;
