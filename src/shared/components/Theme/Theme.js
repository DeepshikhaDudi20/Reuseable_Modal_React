import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../contexts/ThemeStore";
import { themes, GlobalStyle } from "../../../styles/theme";

const Theme = ({ children }) => {
  // Use Theme context to set up the theme
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
