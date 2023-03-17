import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fishReducer from '../Reducer/fishReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(fishReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store;