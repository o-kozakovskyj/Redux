import React from 'react';
import Header from './Header';
import UserContext from './user-context';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'http://avatars3.githubusercontent.com/u1001',
    },
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
