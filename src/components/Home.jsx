import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const App = props => (
    <button
        className="home-page-button"
        onClick={() =>
            props.changeReduxStoreCounter(props.reduxStoreCounter + 1)
        }
    >
        Change redux store ({props.reduxStoreCounter})
    </button>
);

const mapStateToProps = ({ reduxStoreCounter }) => ({ reduxStoreCounter });
const mapDispatchToProps = dispatch => ({
    changeReduxStoreCounter: reduxStoreCounter =>
        dispatch(actions.changeReduxStoreCounter(reduxStoreCounter))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
