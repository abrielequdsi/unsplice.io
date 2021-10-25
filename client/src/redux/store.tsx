import { createStore } from 'redux';
import reducers from './reducers/index.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

export default store;
