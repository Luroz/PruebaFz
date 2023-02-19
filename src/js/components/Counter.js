import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button color='secondary' onClick={() => onDecrement()}>-</Button>
      <Button disabled><span>{value}</span></Button>
      <Button onClick={() => onIncrement()}>+</Button>
    </ButtonGroup>
  </div>
)

export default Counter;
