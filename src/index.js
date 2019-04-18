import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.scss';
import { createStore } from 'redux';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';

const store =
  process.env.MODE !== 'development'
    ? createStore(reducers)
    : createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Helmet>
          <meta name="theme-color" content="#333" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Provider>
  </Router>,
  document.getElementById('main'),
);

if (module.hot) module.hot.accept();
