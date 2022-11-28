import React from 'react'

const Amount = () => {
  return (
    <>
      <div className="tip_amount">
        <div>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>0.00</span>
        </div>
      </div>

      <div className="total">
        <div>
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div className="price">
          $<span>0.00</span>
        </div>
      </div>

      <button>RESET</button>
    </>
  );
}

export default Amount
