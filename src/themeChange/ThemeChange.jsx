import { useState } from "react";

const ThemeChange = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#333333" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: theme === "light" ? "#007bff" : "#6c757d",
    color: "white",
    marginTop: "20px",
  };

  return (
    <div style={themeStyles}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <p>Current theme is: {theme}</p>
      <button onClick={toggleTheme} style={buttonStyles}>
        Switch to {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};
export default ThemeChange;
