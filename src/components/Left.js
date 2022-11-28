import React from 'react'
import { StyledButton, StyledLeft } from './styles/Left.styled';
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
// import Input from './Input';

const Left = () => {
  return (
      <StyledLeft>
        {/* <Input /> */}
        <h3>Bill</h3>
        <div className="bill_persons">
          <img src={dollar} alt="" />
          <input type="number" />
        </div>

        <div className="select_tip">
          <h3>Select Tip %</h3>
          <div class="grid">
            <StyledButton className="tip_percent" value="5">
              5%
            </StyledButton>
            <StyledButton className="tip_percent" value="10">
              10%
            </StyledButton>
            <StyledButton className="tip_percent" value="15">
              15%
            </StyledButton>
            <StyledButton className="tip_percent" value="25">
              25%
            </StyledButton>
            <StyledButton className="tip_percent" value="50">
              50%
            </StyledButton>
            <input
              className="custom_tip_percent"
              type="number"
              name="tip"
              placeholder="Custom"
            />
          </div>
        </div>

        <h3>Number of Persons</h3>
        <div className="bill_persons">
          <img src={person} alt="" />
          <input type="number" />
        </div>
        {/* <Input/> */}
      </StyledLeft>
  );
}

export default Left
