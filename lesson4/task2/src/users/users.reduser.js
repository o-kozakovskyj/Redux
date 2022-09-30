import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
  usersList: [],
};
const usersReducer = (state = initialState, active) => {
  switch (active.type) {
    default:
      return state;
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(active.payload),
      };
    case DELETE_USER: {
      const newList = state.usersList.filter(user => user.id !== active.payload);
      return {
        ...state,
        usersList: newList,
      };
    }
  }
};
export default usersReducer;
