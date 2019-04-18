import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Routes from '@/routes';
import App from '@/components/App';
import './assets/css/styles.scss';

console.log(Routes);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Helmet>
          <meta name="theme-color" content="#333" />
        </Helmet>
        <Routes />
      </App>
    </Provider>
  </Router>,
  document.getElementById('main'),
);

if (module.hot) module.hot.accept();
