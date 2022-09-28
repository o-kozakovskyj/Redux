export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = () => ({
  type: ADD,
  payload: { id: 76, name: 'sarah' },
});
export const delUser = () => ({
  type: DELETE,
  payload: 76,
});
