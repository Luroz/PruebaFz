import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <span>{value}</span>
    <button
      onClick={() => onIncrement()}>
      +
    </button>
    <button
      onClick={() => onDecrement()}>
      -
    </button>
  </div>
)

export default Counter;
