import React from 'react';
import { connect } from 'react-redux';

const App = props => (
  <main className="app-main">
    <header className="app-header">{props.appName}</header>
    <div className="app-container">{props.children}</div>
  </main>
);

const mapStateToProps = ({ appName }) => ({ appName });
export default connect(mapStateToProps)(App);
