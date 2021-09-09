import React, { useState, useEffect } from "react";
import "../Circle/circle.css";
import useGenerateColor from "../../hooks/useGenerateColor";
const CircleHook = () => {
  const color = useGenerateColor(1000, "#000000");

  return (
    <div>
      <div
        className="circle"
        style={{
          background: color,
        }}
      ></div>
    </div>
  );
};

export default CircleHook;
