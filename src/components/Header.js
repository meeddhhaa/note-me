import React from "react";

const Header = ({ handleToggleDarkMode, darkmode }) => {
  const text = darkmode ? "Light" : "Dark";
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {text} Mode
      </button>
    </div>
  );
};

export default Header;
