import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_USER: {
      return {
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return {
        user: null,
      };
    }
  }
};
export default userReducer;
