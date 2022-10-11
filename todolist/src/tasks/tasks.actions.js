import { sortedTasksSelector } from './tasks.selectors';
import { fetchTaskList, deleteTask, updateTask, createTask } from './tasksGateway';

export const TASKS_LOADED = 'TASKS/TASKS_LOADED';

export const tasksLoaded = tasksList => {
  const action = {
    type: TASKS_LOADED,
    payLoad: {
      tasksList,
    },
  };

  return action;
};
export const getTasksList = () => {
  const thunkActions = dispatch => {
    fetchTaskList().then(tasksList => dispatch(tasksLoaded(tasksList)));
  };
  return thunkActions;
};
export const deleteTasksList = id => {
  const thunkActions = dispatch => {
    deleteTask(id).then(() => dispatch(getTasksList()));
  };
  return thunkActions;
};
export const updateTasksList = taskId => {
  const thunkActions = (dispatch, getState) => {
    const state = getState();
    const tasksList = sortedTasksSelector(state);
    const task = tasksList.find(taska => taska.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
  return thunkActions;
};

export const createTasksList = text => {
  const thunkActions = dispatch => {
    const newTask = {
      text,
      done: false,
      createAt: new Date(),
    };

    createTask(newTask).then(() => dispatch(getTasksList()));
  };
  return thunkActions;
};
