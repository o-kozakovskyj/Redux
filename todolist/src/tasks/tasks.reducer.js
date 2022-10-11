import { TASKS_LOADED } from './tasks.actions';

const initialState = {
  tasksList: [],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOADED: {
      return {
        ...state,
        tasksList: action.payLoad.tasksList,
      };
    }
    default:
      return state;
  }
};
export default tasksReducer;
