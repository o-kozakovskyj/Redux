import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export const counterReduser = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export const store = createStore(counterReduser);
