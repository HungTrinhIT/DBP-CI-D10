import { useState, useEffect } from "react";

const useGenerateColor = (timeout, initColor) => {
  const [color, setColor] = useState(initColor);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const nextColor = Math.floor(Math.random() * 999999);
      setColor(`#${nextColor}`);
    }, timeout);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
};

export default useGenerateColor;
