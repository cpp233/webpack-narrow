import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import calReducer from './reducers/calReducer';

const reducers = combineReducers({
  cal: calReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
