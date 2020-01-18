import React from 'react';
import { connect } from 'react-redux'

import '../css/app.css';

const AppComponent = (props) => {
  return (
    <div className="App">
      <div className="jumbotron text-center">
        <img src="./assets/logo.png" alt="My App" width="150" />
        <h2>My App</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)