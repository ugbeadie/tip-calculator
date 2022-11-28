import React from 'react'
import { StyledRight } from './styles/Right.styled';

const Right = () => {
  return (
    <StyledRight>
      <div className="amount">
        <div>
          <h4>Tip Amount</h4>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>0.00</span>
        </div>
      </div>

      <div className="amount">
        <div>
          <h4>Total</h4>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>0.00</span>
        </div>
      </div>

      <button>RESET</button>
    </StyledRight>
  );
}

export default Right
