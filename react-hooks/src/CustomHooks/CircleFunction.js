import React, { useEffect, useState } from "react";
import useGenerateColor from "../hooks/useGenerateColor";

const CircleFunction = (props) => {
  const color = useGenerateColor(0, "#000000");
  return (
    <div
      className="circle"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default CircleFunction;
