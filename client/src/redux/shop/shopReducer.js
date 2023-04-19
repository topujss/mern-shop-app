import { CREATE_BRAND_FULFILL, GET_BRAND_FULFILL, GET_BRAND_REJECTED, GET_BRAND_REQ } from './actionTypes';
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

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
