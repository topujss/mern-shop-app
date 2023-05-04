import {
  BRAND_STATUS_FULFILL,
  BRAND_UPDATE_FULFILL,
  CATEGORY_STATUS_FULFILL,
  CATEGORY_UPDATE_FULFILL,
  CREATE_BRAND_FULFILL,
  CREATE_CATEGORY_FULFILL,
  CREATE_TAG_FULFILL,
  CREATE_TAG_REJECTED,
  DELETE_BRAND_FULFILL,
  DELETE_CATEGORY_FULFILL,
  DELETE_TAG_FULFILL,
  GET_BRAND_FULFILL,
  GET_BRAND_REJECTED,
  GET_BRAND_REQ,
  GET_CATEGORY_FULFILL,
  GET_CATEGORY_REJECTED,
  GET_PRODUCT_FULFILL,
  GET_PRODUCT_REJECTED,
  GET_PRODUCT_REQ,
  GET_TAG_FULFILL,
  GET_TAG_REJECTED,
  TAG_STATUS_FULFILL,
  TAG_UPDATE_FULFILL,
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
     * TAG reducer start
     */

    case GET_TAG_FULFILL:
      return {
        ...state,
        tags: payload,
      };

    case GET_TAG_REJECTED:
      return {
        ...state,
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

    case TAG_UPDATE_FULFILL:
      state.tags[state.tags.findIndex((findId) => findId._id === payload._id)] = payload;
      return {
        ...state,
        tags: state.tags,
      };

    case TAG_STATUS_FULFILL:
      state.tags[state.tags.findIndex((getId) => getId._id === payload._id)] = payload;
      return {
        ...state,
        tags: state.tags,
      };

    /**
     * CATEGORY reducer start
     */

    case GET_CATEGORY_FULFILL:
      return {
        ...state,
        categories: payload,
      };

    case GET_CATEGORY_REJECTED:
      return {
        ...state,
        error: payload,
      };

    case CREATE_CATEGORY_FULFILL:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case DELETE_CATEGORY_FULFILL:
      return {
        ...state,
        categories: state.categories.filter((d) => d._id !== payload),
      };

    case CATEGORY_STATUS_FULFILL:
      state.categories[state.categories.findIndex((getId) => getId._id === payload._id)] = payload;
      return {
        ...state,
        categories: state.categories,
      };

    case CATEGORY_UPDATE_FULFILL:
      state.categories[state.categories.findIndex((getId) => getId._id === payload._id)] = payload;
      return {
        ...state,
        categories: state.categories,
      };

    /**
     * PRODUCTS reducer start
     */
    case GET_PRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT_FULFILL:
      return {
        ...state,
        loading: false,
        products: [...payload],
        message: 'Product successfully loaded',
      };

    case GET_PRODUCT_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
