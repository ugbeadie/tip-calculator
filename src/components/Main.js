import React, { useState, useEffect } from 'react'
import { StyledMain } from './styles/Main.styled'
import Left from './Left'
import Right from './Right'
import Logo from './Logo'

const Main = () => {
  
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false)

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value);
  }
  
  const handleTipPercent = (e) => {
    if (people === 0) {
      setError(true)
    }
    else {
      setError(false)
      setTipPercent(e.target.value/100);
    }
  };

  const handleNoOfPeople = (e) => {
    setPeople(e.target.value);
  }

  const resetBillAmount = () => {
    setBillAmount(0);
    setPeople(0);
  }

  useEffect(() => {
    setTipAmount((tipPercent * billAmount).toFixed(2));
    setTotal((tipAmount * people).toFixed(2));
  }, [tipPercent, billAmount, tipAmount, people]);


  return (
    <StyledMain>
      <Logo />
      <div className="container">
        <Left
          handleBillAmount={handleBillAmount}
          setTipPercent={setTipPercent}
          handleTipPercent={handleTipPercent}
          people={people}
          handleNoOfPeople={handleNoOfPeople}
          error={error}
        />
        <Right 
        tipAmount={tipAmount} 
        total={total} 
        resetBillAmount={resetBillAmount}
        people={people}
        />
      </div>
    </StyledMain>
  );
}

export default Main