import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as actions from './users.actions';

class UsersList extends React.Component {
  goPrev = () => {
    const { currentPage } = this.props;
    if (currentPage > 0) {
      this.props.previousPage();
    }
  };

  goNext = () => {
    const { currentPage, users } = this.props;
    if (currentPage < users.length - 1) {
      this.props.nextPage();
    }
  };

  render() {
    const itemsPerPage = 3;
    const { currentPage, users } = this.props;
    const startIndex = currentPage * itemsPerPage;
    console.log(currentPage, users);
    return (
      <div>
        <Pagination
          currentPage={currentPage + 1}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul>
          {users.slice(startIndex, startIndex + itemsPerPage).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  currentPage: state.users.currentPage,
  users: state.users.usersList,
});
const mapDispatch = {
  nextPage: actions.nextPage,
  previousPage: actions.previousPage,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);
export default ConnectedUsersList;
