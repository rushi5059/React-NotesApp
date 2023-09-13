import React from "react";

const Title = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Welcome to the Notify...</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default Title;
