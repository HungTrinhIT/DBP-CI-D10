import React from "react";

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <img
          style={{
            margin: "0 auto",
            display: "block",
          }}
          src="images/spinner.gif"
          alt="spinner"
        />
      </div>
    );
  }

  return null;
};

export default Loading;
