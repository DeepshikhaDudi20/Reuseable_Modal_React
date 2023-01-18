import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
`;
export const HeaderContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  padding: 0.6rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.btnTxt};
  color: ${({ theme }) => theme.colors.main};
  border: 2px solid black;
  border-radius: 8px;
  font-family: Boston;
  font-weight: 700;
  font-size: 1rem;
`;
