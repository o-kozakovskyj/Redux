import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  render() {
    return (
      <div>
        <Filter />
        <User />
      </div>
    );
  }
}
const mapState = state => ({
  filterText: state.users.filterText,
  usersList: state.users.usersList,
});
const connector = connect(mapState);
const ConnectedUsersList = connector(UsersList);
export default ConnectedUsersList;
