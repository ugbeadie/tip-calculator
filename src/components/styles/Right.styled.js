import styled from "styled-components";

export const StyledRight = styled.div`
  background-color: hsl(183, 100%, 15%);
  padding: 40px 30px;
  border-radius: 20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 30px 20px;
  }

  .amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    h4 {
      color: hsl(0, 0%, 100%);
    }

    p {
      color: hsl(184, 14%, 56%);
      font-size: 14px;
      padding-top: 5px;
    }

    .price {
      color: hsl(172, 67%, 45%);
      font-size: 40px;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 30px;
      }
    }
  }
`;

export const StyledResetButton = styled.button`
    font-family: "Space Mono", monospace;
    width: 100%;
    color: hsl(183, 100%, 15%);
    background-color: hsl(172, 67%, 45%);
    font-size: 16px;
    font-weight: 700;
    padding: 12px;
    margin-top: 100px;
    border-radius: 6px;
    border: none;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-top: 120px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 10px;
    }
`