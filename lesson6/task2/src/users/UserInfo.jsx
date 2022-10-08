import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isFethingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {
  console.log(userData);
  if (isFetching) {
    return <Spinner />;
  }
  if (!userData) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{`from ${userData.location}`}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape(),
};
UserInfo.defaultValue = {
  userData: null,
};
const mapState = state => ({
  isFetching: isFethingSelector(state),
  userData: userDataSelector(state),
});
export default connect(mapState)(UserInfo);
