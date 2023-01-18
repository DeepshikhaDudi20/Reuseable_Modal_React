import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("opus");
  const isAquaTheme = theme === "opus";
  const switchTheme = () => setTheme(isAquaTheme ? "aqua" : "opus");

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
