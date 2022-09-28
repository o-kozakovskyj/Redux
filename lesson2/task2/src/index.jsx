import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};
incrementBtn.addEventListener('click', onIncrement);
store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, val) => acc + val, 0);
  const historyString = state.history
    .map(number => {
      if (number > 0) {
        return `+${number}`;
      }
      return number;
    })
    .join('');
  resultElem.textContent = `${historyString} = ${currentValue}`;
});
const onDecrement = () => {
  store.dispatch(decrement());
};
decrementBtn.addEventListener('click', onDecrement);
store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, val) => acc + val, 0);
  const historyString = state.history
    .map(number => {
      if (number > 0) {
        return `+${number}`;
      }
      return number;
    })
    .join('');
  resultElem.textContent = `${historyString} = ${currentValue}`;
});
const onReset = () => {
  store.dispatch(reset());
};
resetBtn.addEventListener('click', onReset);
store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, val) => acc + val, 0);
  const historyString = state.history
    .map(number => {
      if (number > 0) {
        return `+${number}`;
      }
      return number;
    })
    .join('');

  resultElem.textContent = state.history.length === 0 ? 0 : `${historyString} = ${currentValue}`;
});
