export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = user => ({
  type: ADD,
  payload: user,
});
export const delUser = id => ({
  type: DELETE,
  payload: id,
});
