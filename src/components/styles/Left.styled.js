import styled from "styled-components";

export const StyledLeft = styled.div`
  .bill_persons {
    position: relative;
    margin-top: 15px;

    & img {
      position: absolute;
      top: 30%;
      left: 3%;
    }
    & input {
      width: 100%;
      color: hsl(183, 100%, 15%);
      background-color: hsl(189, 41%, 97%);
      font-size: 24px;
      font-weight; 700;
      padding: 10px;
      border-radius: 6px;
      border: none;
      outline: none;
    }
  }

  .select_tip {
    width: 100%;
    margin-top: 30px;

    .grid {
      display: grid;
      grid-template-columns: 31% 31% 31%;
      gap: 15px;
      margin: 10px 0 30px;
      place-items: center;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        grid-template-columns: 30% 30% 30%;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 47.5% 47.5%;
        
      }

      .custom_tip_percent {
        font-family: "Space Mono", monospace;
        color: hsl(183, 100%, 15%);
        background-color: hsl(185, 41%, 84%);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        padding: 12px 0;
        border: none;
        outline: none;
        border-radius: 6px;
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 18px;
        }
      }
    }
  }
`;

export const StyledButton = styled.button`
  font-family: "Space Mono", monospace;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  padding: 12px 0;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  color: hsl(185, 41%, 84%);
  background-color: hsl(183, 100%, 15%);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 18px;
  }
`;

