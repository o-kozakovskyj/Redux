export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DELETE';

export const addUser = user => ({
  type: ADD,
  payload: user,
});
export const delUser = id => ({
  type: DEL,
  payload: id,
});
