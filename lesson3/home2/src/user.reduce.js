import { SET_USER, REMOVE_USER } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_USER: {
      return action.payload.userData;
    }
    case REMOVE_USER: {
      return null;
    }
  }
};
export default userReducer;
