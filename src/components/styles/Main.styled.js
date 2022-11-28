import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    background-color: hsl(0, 0%, 100%);
    padding: 40px;
    margin-top: 60px;
    border-radius: 20px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      padding: 20px;
      gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: column;
    }
  }
`;