import axios from 'axios';
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQ,
  GET_BRAND_SUCCESS,
} from './actionTypes';

/**
 * @param get
 * @function getAllBrands
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
 * @param post
 * @function createBrand
 * @description using axios delete request using thunk-middleware
 */
export const createBrand =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      await axios
        .post('http://localhost:5050/api/v1/product/brand', data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brands });
          setModal(false);
          setInput('');
          setLogo(null);
        })
        .catch((err) => {
          dispatch({ type: CREATE_BRAND_FAILED, payload: err.message });
        });
    } catch (err) {
      dispatch({ type: CREATE_BRAND_FAILED, payload: err.message });
    }
  };

/**
 * @param id
 * @function deleteBrand
 * @description by id using axios delete request using thunk-middleware
 */
export const deleteBrand = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
  }
};
