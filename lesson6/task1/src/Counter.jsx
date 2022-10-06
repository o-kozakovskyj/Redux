import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ value, increment, decrement, reset }) => (
  <div className="counter">
    <button className="counter__button" onClick={decrement}>
      -
    </button>
    <span className="counter__value" onClick={reset}>
      {value}
    </span>
    <button className="counter__button" onClick={increment}>
      +
    </button>
  </div>
);
const mapState = state => ({
  value: state,
});
const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

export default connect(mapState, mapDispatch)(Counter);
