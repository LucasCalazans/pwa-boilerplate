import React from 'react';
import { connect } from 'react-redux';
import * as actions from '@/redux/actions';

const Home = ({ reduxStoreCounter }) => (
  <button
    className="home-page-button"
    onClick={() => props.changeReduxStoreCounter(reduxStoreCounter + 1)}
  >
    Change redux store ({reduxStoreCounter})
  </button>
);

const mapStateToProps = ({ reduxStoreCounter }) => ({ reduxStoreCounter });

const mapDispatchToProps = dispatch => ({
  changeReduxStoreCounter: reduxStoreCounter =>
    dispatch(actions.changeReduxStoreCounter(reduxStoreCounter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
