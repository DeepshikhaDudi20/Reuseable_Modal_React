import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import Modal from "../Modals/Modal";
import App from "../../../App";
import { btnText } from "../../../App_Data/HomePageData";

expect.extend(toHaveNoViolations);

describe("The <Modal/> component", () => {
  it("should render modal header text for confirmation modal", () => {
    render(<App />);
    const button = screen.getByText(btnText.confirmationModalBtnText);
    fireEvent.click(button);

    expect(screen.getByRole("document")).toBeTruthy();
    expect(screen.getByTestId("modal-header")).toBeTruthy();
    const { queryByText } = render(<Modal />);
    expect(queryByText(/Join NewDay/)).toBeTruthy();
  });

  it("should redirect to appropriate page on clicking Apply button on confirmation modal", () => {
    render(<App />);
    const button = screen.getByText(btnText.confirmationModalBtnText);
    fireEvent.click(button);
    const applyModalButton = screen.getByTestId("button-apply");
    fireEvent.click(applyModalButton);
    //Can implement a functionality test here on clicking Accept Button (as part of improvement)
  });

  it("should close modal on clicking decline button of modal", () => {
    render(<App />);
    const button = screen.getByText(btnText.confirmationModalBtnText);
    fireEvent.click(button);

    const declineButton = screen.getByRole("button", {
      name: /Decline/i
    });
    expect(screen.getByRole("dialog")).toBeTruthy();
    fireEvent.click(declineButton);
    expect(
      screen.getByRole("button", {
        name: btnText.confirmationModalBtnText
      })
    ).toBeTruthy();
  });

  it("should close modal on clicking close modal icon", () => {
    render(<App />);
    const button = screen.getByText(btnText.subscribeModalBtnText);
    fireEvent.click(button);

    const closeModalButton = screen.getByTestId("modal-close");
    expect(screen.getByRole("dialog")).toBeTruthy();
    fireEvent.click(closeModalButton);
  });

  it("should not have any accessibility violations", async () => {
    const { container } = render(<Modal />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
