/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import usersReducer from './users/users.reduser';

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
