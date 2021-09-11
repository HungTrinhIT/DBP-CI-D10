import { useState, useEffect } from "react";

const useGenerateColor = (timeout, initialColor) => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = Math.floor(Math.random() * 999999);
      setColor(`#${newColor}`);
    }, timeout);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
};

export default useGenerateColor;
