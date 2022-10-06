import users from './list';
import { FILTER_USERS } from './users.actions';

const initialState = {
  users: {
    filterText: '',
    usersList: users,
  },
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_USERS: {
      const newUsersList = state.users.usersList.filter(user =>
        user.includes(state.users.filterText),
      );
      return {
        ...state,
        usersList: newUsersList,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
