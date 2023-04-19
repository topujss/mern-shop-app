import axios from 'axios';
import {
  CREATE_BRAND_FULFILL,
  CREATE_BRAND_REJECTED,
  GET_BRAND_FULFILL,
  GET_BRAND_REJECTED,
  GET_BRAND_REQ,
} from './actionTypes';

let api_link = `http://localhost:5050/api/v1/product/brand`;
/**
 * @param get
 * @function getAllBrands
 * @description by axios get request using thunk-middleware
 */
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQ });
    await axios
      .get(api_link)
      .then((res) => {
        dispatch({ type: GET_BRAND_FULFILL, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({ type: GET_BRAND_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: GET_BRAND_REJECTED, payload: error.message });
  }
};

/**
 * @param post
 * @function createBrand
 * @description send create brand request using thunk-middleware
 */
export const createBrand = (data) => async (dispatch) => {
  try {
    await axios
      .post(api_link, data)
      .then((res) => {
        dispatch({ type: CREATE_BRAND_FULFILL, payload: res.data.brand });
      })
      .catch((error) => {
        dispatch({ type: CREATE_BRAND_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: CREATE_BRAND_REJECTED, payload: error.message });
  }
};
