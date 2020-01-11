import React from 'react';
import './app.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center">
          <img src="./assets/logo.png" alt="My App" width="150" />
          <h2>My App</h2>
        </div>
      </div>
    );
  }
}

export default App;
