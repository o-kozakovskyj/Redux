/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import pageReducer from './users/users.reducer';

const store = createStore(
  pageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
