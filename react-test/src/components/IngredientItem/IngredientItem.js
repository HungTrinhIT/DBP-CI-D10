import React from "react";
import "./IngredientItem.css";
const IngredientItem = ({ type, ...props }) => {
  return <div className={type}></div>;
};
export default IngredientItem;
