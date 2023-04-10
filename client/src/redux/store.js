import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux thunk middlewares - used to make perform async behaviour when req the server
const middlewares = [thunk];

// create an app store
const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export the app store
export default myStore;
