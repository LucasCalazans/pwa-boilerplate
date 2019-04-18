import React from 'react';
import { connect } from 'react-redux';

const App = ({ appName, children }) => (
  <main className="app-main">
    <header className="app-header">{appName}</header>
    <div className="app-container">{children}</div>
  </main>
);

const mapStateToProps = ({ appName }) => ({ appName });

export default connect(mapStateToProps)(App);
