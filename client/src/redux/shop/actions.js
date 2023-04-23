import axios from 'axios';
import {
  BRAND_STATUS_FULFILL,
  BRAND_STATUS_REJECTED,
  BRAND_UPDATE_FULFILL,
  BRAND_UPDATE_REJECTED,
  CREATE_BRAND_FULFILL,
  CREATE_BRAND_REJECTED,
  DELETE_BRAND_FULFILL,
  DELETE_BRAND_REJECTED,
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
export const createBrand =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      await axios
        .post(api_link, data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_FULFILL, payload: res.data.brand });
          setModal(false);
          setInput('');
          setLogo(null);
        })
        .catch((error) => {
          dispatch({ type: CREATE_BRAND_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: CREATE_BRAND_REJECTED, payload: error.message });
    }
  };

/**
 * @param delete
 * @function deleteBrand
 * @desc Send request to server to delete brand using thunk-middleware
 */
export const deleteBrand = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`${api_link}/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_FULFILL, payload: id });
      })
      .catch((error) => {
        dispatch({ type: DELETE_BRAND_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_REJECTED, payload: error.message });
  }
};

/**
 * @param patch
 * @function brandStatusUpdate
 * @desc Send request to server to update brand status using thunk-middleware
 */
export const brandStatusUpdate =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand-status/${id}`, { status })
        .then((res) => {
          dispatch({ type: BRAND_STATUS_FULFILL, payload: res.data.brand });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: BRAND_STATUS_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: BRAND_STATUS_REJECTED, payload: error.message });
    }
  };

/**
 * @param patch
 * @function brandUpdate
 * @desc Send request to server to update brand using thunk-middleware
 */
export const brandUpdate =
  ({ id, name, photo, setEditModal }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/brand/${id}`, {
          id,
          name,
          photo,
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: BRAND_UPDATE_FULFILL, payload: res.data?.brand });
          setEditModal(() => (prevState) => ({ ...prevState, show: false }));
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: BRAND_UPDATE_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: BRAND_UPDATE_REJECTED, payload: error.message });
    }
  };
