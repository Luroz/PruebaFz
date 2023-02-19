import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counters';
import Counter from '../components/Counter';

const CounterList = ({
  counters,
  onIncrement,
  onDecrement
}) => (
  <ul>
    {counters.map(counter =>
      <Counter
        key={counter.id}
        value={counter.value}
        onIncrement={() => onIncrement(counter.id)}
        onDecrement={() => onDecrement(counter.id)}
      />
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
