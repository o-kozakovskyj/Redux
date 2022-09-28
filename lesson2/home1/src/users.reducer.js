import { ADD, DEL } from './users.actions';

const initialState = {
  userList: [],
};
export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newUser = state.userList.concat(action.payload);
      return {
        ...state,
        userList: newUser,
      };
    }
    case DEL: {
      const newUserList = state.userList.filter(user => user.id !== action.payload);
      return {
        userList: newUserList,
      };
    }
    default:
      return state;
  }
};
export default usersReduser;
