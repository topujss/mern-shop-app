import { combineReducers } from 'redux';
import shopReducer from './shop/shopReducer';

// create Root reducer
const rootReducer = combineReducers({
  shop: shopReducer,
});

// export the reducer
export default rootReducer;
