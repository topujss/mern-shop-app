import {
  BRAND_STATUS_FULFILL,
  BRAND_UPDATE_FULFILL,
  CREATE_BRAND_FULFILL,
  CREATE_TAG_FULFILL,
  CREATE_TAG_REJECTED,
  DELETE_BRAND_FULFILL,
  DELETE_TAG_FULFILL,
  GET_BRAND_FULFILL,
  GET_BRAND_REJECTED,
  GET_BRAND_REQ,
  GET_TAG_FULFILL,
  GET_TAG_REJECTED,
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
      state.brands[state.brands.findIndex((findId) => findId._id === payload._id)] = payload;
      return {
        ...state,
        brands: state.brands,
      };

    /**
     * tag reducer start
     */

    case GET_TAG_FULFILL:
      return {
        ...state,
        tags: payload,
      };

    case GET_TAG_REJECTED:
      return {
        ...state,
        tags: [],
        error: payload,
      };

    case CREATE_TAG_FULFILL:
      return {
        ...state,
        tags: [...state.tags, payload],
      };

    case CREATE_TAG_REJECTED:
      return {
        ...state,
        error: payload,
      };

    case DELETE_TAG_FULFILL:
      return {
        ...state,
        tags: state.tags.filter((d) => d._id !== payload),
      };

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
