import { createStore } from 'redux';
import reducers from '@/redux/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const params = process.env.MODE !== 'development' ? [reducers] : [reducers, devTools];

export default createStore(...params);
