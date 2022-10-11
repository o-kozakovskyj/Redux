import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import * as tasksActions from '../tasks.actions';
import { sortedTasksSelector } from '../tasks.selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <div className="todo-list">
          <CreateTaskInput onCreate={this.props.createTasksList} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTasksList}
            handleTaskDelete={this.props.deleteTasksList}
          />
        </div>
      </>
    );
  }
}

TodoList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTasksList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = state => ({
  tasks: sortedTasksSelector(state),
});
const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  deleteTasksList: tasksActions.deleteTasksList,
  updateTasksList: tasksActions.updateTasksList,
  createTasksList: tasksActions.createTasksList,
};

export default connect(mapState, mapDispatch)(TodoList);
