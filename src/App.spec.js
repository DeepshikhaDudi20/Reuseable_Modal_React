import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { configure } from "enzyme";
import { btnText, headerToggleThemeBtnText } from "./App_Data/HomePageData";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });
expect.extend(toHaveNoViolations);

describe("The <App/> component", () => {
  const gameArray = ["R R", "R P"];
  const playerScore = -1;

  it("should calculate player score based on game Array ", () => {
    const score = calculateScore(gameArray);
    expect(score).toEqual(playerScore);
  });

  it("should renders modal on button click", async () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: btnText.subscribeModalBtnText
    });

    fireEvent.click(button);
    expect(screen.getByRole("dialog")).toBeTruthy();
  });

  it("should toggle theme on header button click", () => {
    render(<App />);
    const themeToggler = screen.getByText(
      headerToggleThemeBtnText.opusThemeBtnText
    );
    const headerBackground = screen.getByTestId("toggle-theme");
    let themeColor = window.getComputedStyle(headerBackground);
    expect(themeColor.color).toBe("rgb(0, 118, 128)");

    fireEvent.click(themeToggler);
    themeColor = window.getComputedStyle(headerBackground);

    expect(
      screen.getByText(headerToggleThemeBtnText.aquaThemeBtnText)
    ).toBeTruthy();

    expect(themeColor.color).toBe("rgb(0, 0, 166)");
  });

  it("should not have any accessibility violations", async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
