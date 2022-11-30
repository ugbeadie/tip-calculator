import React from 'react'
import { StyledRight, StyledResetButton } from './styles/Right.styled';

const Right = ({tipAmount, total, resetBillAmount}) => {

  return (
    <StyledRight>
      <div className="amount">
        <div>
          <h4>Tip Amount</h4>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>{tipAmount}</span>
        </div>
      </div>

      <div className="amount">
        <div>
          <h4>Total</h4>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>{total}</span>
        </div>
      </div>

      <StyledResetButton onClick={resetBillAmount}>
        RESET
      </StyledResetButton>
    </StyledRight>
  );
}

export default Right
