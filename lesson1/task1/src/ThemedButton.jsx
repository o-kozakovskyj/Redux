import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button
        className="btn"
        {...this.props}
        style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
