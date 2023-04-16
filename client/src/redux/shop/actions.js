import axios from 'axios';
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQ,
  GET_BRAND_SUCCESS,
} from './actionTypes';

/**
 * @Request get all brand data
 * @description by axios get request using thunk-middleware
 */
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQ });
    await axios
      .get('http://localhost:5050/api/v1/product/brand')
      .then((res) => {
        dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brands });
      })
      .catch((err) => {
        dispatch({ type: GET_BRAND_FAILED, payload: err.message });
      });
  } catch (err) {
    dispatch({ type: GET_BRAND_FAILED, payload: err.message });
  }
};

/**
 * @Request POST brand data
 * @description by axios POST request using thunk-middleware
 */
export const createBrand = (data) => async (dispatch) => {
  console.log(data);
  try {
    await axios
      .post('http://localhost:5050/api/v1/product/brand', data)
      .then((res) => {
        dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
      })
      .catch((err) => {
        dispatch({ type: CREATE_BRAND_FAILED, payload: err.message });
      });
  } catch (err) {
    dispatch({ type: CREATE_BRAND_FAILED, payload: err.message });
  }
};
