import React from 'react';
import { connect } from 'react-redux';
import { home as actions } from '@/redux/actions';
import { Button } from '@/components';
import BaseApi from '@/api/BaseApi';

const Home = ({ reduxStoreCounter, changeReduxStoreCounter }) => (
  <Button onClick={() => changeReduxStoreCounter(reduxStoreCounter + 1)}>
    Change redux store ({reduxStoreCounter})
  </Button>
);

const mapStateToProps = ({ home }) => ({ reduxStoreCounter: home.reduxStoreCounter });

const mapDispatchToProps = dispatch => ({
  changeReduxStoreCounter: reduxStoreCounter =>
    dispatch(actions.changeReduxStoreCounter(reduxStoreCounter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
