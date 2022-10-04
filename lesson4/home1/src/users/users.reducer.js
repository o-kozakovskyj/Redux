import { NEXT, PREVIOUS } from './users.actions';
import users from './users';

const initialState = {
  users: {
    usersList: users,
    currentPage: 0,
  },
};
const pageReducer = (state = initialState, active) => {
  switch (active.type) {
    case NEXT: {
      const newUsers = {
        usersList: users,
        currentPage: state.users.currentPage + 1,
      };
      return {
        users: newUsers,
      };
    }
    case PREVIOUS: {
      const newUsers = {
        usersList: users,
        currentPage: state.users.currentPage - 1,
      };
      return {
        users: newUsers,
      };
    }
    default:
      return state;
  }
};
export default pageReducer;
