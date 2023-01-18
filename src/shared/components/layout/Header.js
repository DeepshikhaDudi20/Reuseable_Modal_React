import { useContext } from "react";
import * as HeaderStyles from "./styles";
import { headerToggleThemeBtnText } from "../../../App_Data/HomePageData";
import { ThemeContext } from "../../contexts/ThemeStore";

const Header = () => {
  //Using context to avoid passing props to nested components
  const { theme, switchTheme } = useContext(ThemeContext);
  const isOpusTheme = theme === "opus";

  return (
    <HeaderStyles.Header aria-label="header">
      <HeaderStyles.HeaderContainer>
        <HeaderStyles.HeaderButton
          role="button"
          data-testid="toggle-theme"
          onClick={switchTheme}
        >
          {isOpusTheme ? (
            <span data-testid="opus-theme">
              {headerToggleThemeBtnText.opusThemeBtnText}
            </span>
          ) : (
            <span data-testid="aqua-theme">
              {headerToggleThemeBtnText.aquaThemeBtnText}
            </span>
          )}
        </HeaderStyles.HeaderButton>
      </HeaderStyles.HeaderContainer>
    </HeaderStyles.Header>
  );
};

export default Header;
