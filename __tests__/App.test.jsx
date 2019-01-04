import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import reducers from "../src/redux/reducers";

const store = createStore(reducers);
const getApp = () => mount(
    <Provider store={ store }>
        <App />
    </Provider>
);

test('App is rendering', () => {
    const app = getApp();
    expect(app.exists(".app-main")).toEqual(true);
});

test('Redux store is updating after click', () => {
    const app = getApp();
    const initialCounter = store.getState().reduxStoreCounter;

    app.find("button").simulate("click");
    expect(store.getState().reduxStoreCounter).toEqual(initialCounter + 1);
});
