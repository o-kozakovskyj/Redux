import React from 'react';
import UserContext from './user-context';

class UserMenu extends React.Component {
  render() {
    console.log(this.context.name);
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}
UserMenu.contextType = UserContext;
export default UserMenu;
