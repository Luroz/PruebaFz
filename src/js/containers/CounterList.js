import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counters';
import Counter from '../components/Counter';
import Box from '@mui/material/Box';

const CounterList = ({
  counters,
  onIncrement,
  onDecrement
}) => (
  <ul>
    {counters.map(counter =>
      <Box key={counter.id} sx={{ '& > :not(style)': { m: 3 } }}>
        <Counter
          key={counter.id}
          value={counter.value}
          onIncrement={() => onIncrement(counter.id)}
          onDecrement={() => onDecrement(counter.id)}
        />
      </Box>
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    counters: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (id) => dispatch(increment(id)),
    onDecrement: (id) => dispatch(decrement(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
