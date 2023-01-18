import styled, { keyframes } from "styled-components";

// Using keyframes helper for reusable animation keyframes across application
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  gap: 20px;
`;

export const ModalButtonPrimary = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.btnText};
  font-family: filson-soft, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadowPrimaryBtn};
    color: ${({ theme }) => theme.colors.btnText};
  }
`;

//Extending styles for Modal Buttons
export const ModalButtonSecondary = styled(ModalButtonPrimary)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadowSecondaryBtn};
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: ${(props) => (props.positionX ? props.positionX : "center")};
  align-items: ${(props) => (props.positionY ? props.positionY : "center")};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.showOverlay ? "rgba(23, 23, 23, 0.8)" : "rgba(0, 0, 0, 0)"};
  padding: 7px;

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export const ModalContainer = styled.div`
  width: 320px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.body};
  position: relative;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  h1 {
    color: ${({ theme }) => theme.colors.header};
    margin: 0;
    font-family: filson-soft, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.25em;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.main};
  transition: 0.3s ease all;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};

  h1 {
    font-family: filson-soft, sans-serif;
    font-weight: 700px;
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-family: filson-soft, sans-serif;
    font-weight: 400px;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  input {
    display: block;
    width: 80%;
    padding: 0.375rem 0.75rem;
    font-family: "adobe-caslon-pro", serif;
    font-size: 0.8rem;
    font-style: italic;
    line-height: 2;
    background-clip: padding-box;
    border: 1px solid #ced4da;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-top: 1px;
  padding-top: 16px;
  border-radius: 0.25rem;
`;
