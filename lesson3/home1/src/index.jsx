import './index.scss';
import { increment, decrement, reset, store } from './counter';

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
