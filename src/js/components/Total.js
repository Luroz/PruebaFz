import React from 'react';
import { connect } from 'react-redux';

const Total = ({ counters }) => {

  function getSum(total, sum) {
    return total + Math.round(sum)
  }

  let reducedValues = () => {
    let mappedValues = counters.map(counter => counter.value)
    let result = mappedValues.reduce(getSum, 0)
    return result
  }

  return (
    <div>
      <h1>{reducedValues()}</h1>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    counters: state
  };
};

export default connect(
  mapStateToProps
)(Total);