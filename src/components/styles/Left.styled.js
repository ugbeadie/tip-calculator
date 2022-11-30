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
      
      &:focus {
        border: 3px solid hsl(172, 67%, 45%);
      }
    }
  }

  .select_tip {
    width: 100%;
    margin-top: 30px;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin: 15px 0;   

      @media (max-width: ${({ theme }) => theme.tablet}) {
        grid-template-columns: 30% 30% 30%;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 47.5% 47.5%;
        
      }
      }
    }
  }
`;

export const StyledTipButton = styled.div`
  position: relative;

  [name="tip"] {
    opacity: 0;
    position: absolute;
    inset: 0;
    cursor: pointer;

    &:hover + .tip_btn {
      color: hsl(183, 100%, 15%);
      background-color: hsl(185, 41%, 84%);
    }

    &:checked + .tip_btn {
      color: hsl(183, 100%, 15%);
      background-color: hsl(172, 67%, 45%);
    }
  }

  .tip_btn {
    font-family: "Space Mono", monospace;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(185, 41%, 84%);
    background-color: hsl(183, 100%, 15%);
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
`;

export const StyledCustomInput = styled.input`
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

  &:focus {
    border: 3px solid hsl(172, 67%, 45%);
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 18px;
  }
`;

// export const StyledButton = styled.button`
//   font-family: "Space Mono", monospace;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: hsl(185, 41%, 84%);
//   background-color: hsl(183, 100%, 15%);
//   font-size: 24px;
//   font-weight: 700;
//   padding: 12px 0;
//   border: none;
//   outline: none;
//   border-radius: 6px;
//   cursor: pointer;

  

//   @media (max-width: ${({ theme }) => theme.tablet}) {
//     font-size: 18px;
//   }
// `;

