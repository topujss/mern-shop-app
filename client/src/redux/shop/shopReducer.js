import {
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQ,
  GET_BRAND_SUCCESS,
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

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };

    case GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload,
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [state.brands.filter((d) => d._id !== payload)],
      };

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
