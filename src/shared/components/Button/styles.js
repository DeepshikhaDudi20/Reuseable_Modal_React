import styled from "styled-components";

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
