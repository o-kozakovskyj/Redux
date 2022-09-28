import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: [],
};
export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newUser = state.usersList.concat(action.payload);
      return {
        ...state,
        usersList: newUser,
      };
    }
    case DELETE: {
      const newUsersList = state.usersList.filter(user => user.id !== action.payload);
      return {
        usersList: newUsersList,
      };
    }
    default:
      return state;
  }
};
export default usersReduser;
