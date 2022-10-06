/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  options: usersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
