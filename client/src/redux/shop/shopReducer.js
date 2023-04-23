import {
  BRAND_STATUS_FULFILL,
  BRAND_UPDATE_FULFILL,
  CREATE_BRAND_FULFILL,
  DELETE_BRAND_FULFILL,
  GET_BRAND_FULFILL,
  GET_BRAND_REJECTED,
  GET_BRAND_REQ,
} from './actionTypes';
import initialState from './initState';

// create a shop reducer
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRAND_REQ:
      return {
        ...state,
        loading: true,
      };

    case GET_BRAND_FULFILL:
      return {
        ...state,
        loading: false,
        brands: payload,
      };

    case GET_BRAND_REJECTED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload,
      };

    case CREATE_BRAND_FULFILL:
      return {
        ...state,
        brands: [...state.brands, payload],
      };

    case DELETE_BRAND_FULFILL:
      return {
        ...state,
        brands: state.brands.filter((d) => d._id !== payload),
      };

    case BRAND_STATUS_FULFILL:
      // Now, find index of the brands array and match it with the current payload id. Finally, send that index to payload
      state.brands[state.brands.findIndex((getIndex) => getIndex._id === payload._id)] = payload;
      return {
        ...state,
        brands: state.brands,
      };
    
    case BRAND_UPDATE_FULFILL: 
      state.brands[state.brands.findIndex(findId => findId._id === payload._id)] = payload;
      return {
        ...state,
        brands: state.brands
      }

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
