import React from 'react';

const Wallet = (props) => {
  return (
    <div className="wallet">
      <p>Savings: {props.wallet}</p>
    </div>
  )
}

export default Wallet;
