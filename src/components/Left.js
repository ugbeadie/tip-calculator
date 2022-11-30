import React from 'react'
import '../App.css'
import { StyledTipButton,StyledCustomInput,StyledLeft } from './styles/Left.styled';
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Left = ({
  handleBillAmount,
  setTipPercent,
  handleTipPercent,
  handleNoOfPeople,
  error,
}) => {

  const error_style = {
    color: 'red',
    fontSize: '14px',
  }

  return (
    <StyledLeft>
      <h3>Bill</h3>
      <div className="bill_persons">
        <img src={dollar} alt="" />
        <input type="number" placeholder="0" onChange={handleBillAmount} />
      </div>

      <div className="select_tip">
        <h3>Select Tip %</h3>
        <div className="grid">
          <StyledTipButton>
            <input type="radio" name="tip" value="5" onClick={handleTipPercent}
            />
            <div className="tip_btn">5%</div>
          </StyledTipButton>
          <StyledTipButton>
            <input type="radio"  name="tip" value="10" onClick={handleTipPercent}
            />
            <div className="tip_btn">10%</div>
          </StyledTipButton>
          <StyledTipButton>
            <input type="radio" name="tip" value="15" onClick={handleTipPercent}
            />
            <div className="tip_btn">15%</div>
          </StyledTipButton>
          <StyledTipButton>
            <input type="radio" name="tip" value="25" onClick={handleTipPercent}
            />
            <div className="tip_btn">25%</div>
          </StyledTipButton>
          <StyledTipButton>
            <input
              type="radio"
              name="tip"
              value="50"
              onClick={handleTipPercent}
            />
            <div className="tip_btn">50%</div>
          </StyledTipButton>
          <StyledCustomInput
            className="custom_tip_percent"
            type="number"
            placeholder="Custom"
            onChange={(e) => setTipPercent(e.target.value / 100)}
          />
        </div>
      </div>

      <h3>Number of Persons</h3>
      <div className="bill_persons">
        <img src={person} alt="" />
        <input type="number" placeholder="0" onChange={handleNoOfPeople} />
      </div>
      {error ? <label style={error_style}>Can't be zero</label> : null}
    </StyledLeft>
  );
};

export default Left
