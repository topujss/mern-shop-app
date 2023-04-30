import axios from 'axios';
import {
  GET_BRAND_REQ,
  GET_BRAND_FULFILL,
  GET_BRAND_REJECTED,
  CREATE_TAG_FULFILL,
  CREATE_TAG_REJECTED,
  BRAND_UPDATE_FULFILL,
  BRAND_UPDATE_REJECTED,
  BRAND_STATUS_FULFILL,
  BRAND_STATUS_REJECTED,
  CREATE_BRAND_FULFILL,
  CREATE_BRAND_REJECTED,
  DELETE_BRAND_FULFILL,
  DELETE_BRAND_REJECTED,
  DELETE_TAG_FULFILL,
  DELETE_TAG_REJECTED,
  GET_TAG_FULFILL,
  GET_TAG_REJECTED,
  TAG_STATUS_FULFILL,
  TAG_STATUS_REJECTED,
  TAG_UPDATE_FULFILL,
  TAG_UPDATE_REJECTED,
  GET_CATEGORY_REQ,
  GET_CATEGORY_FULFILL,
  GET_CATEGORY_REJECTED,
  CREATE_CATEGORY_FULFILL,
  CREATE_CATEGORY_REJECTED,
} from './actionTypes';

let api_link = `http://localhost:5050/api/v1/product/`;
/**
 * @param get
 * @function getAllBrands
 * @description by axios get request using thunk-middleware
 */
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQ });
    await axios
      .get(api_link + 'brand')
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
        .post(api_link + 'brand', data)
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
      .delete(`${api_link}brand/${id}`)
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
        .patch(`${api_link}/brand-status/${id}`, { status })
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
 * @param put
 * @function brandUpdate
 * @desc Send request to server to update brand using thunk-middleware
 */
export const brandUpdate =
  ({ data, id, setEditModal }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`${api_link}/brand/${id}`, data)
        .then((res) => {
          dispatch({ type: BRAND_UPDATE_FULFILL, payload: res.data.brand });
          setEditModal(() => (prevState) => ({ ...prevState, show: false }));
        })
        .catch((error) => {
          dispatch({ type: BRAND_UPDATE_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: BRAND_UPDATE_REJECTED, payload: error.message });
    }
  };

/**
 * Tag start
 * @param get
 * @function getAllTags
 * @description by axios get request using thunk-middleware
 */
export const getAllTags = () => async (dispatch) => {
  try {
    await axios
      .get(api_link + 'tag')
      .then((res) => {
        dispatch({ type: GET_TAG_FULFILL, payload: res.data.tags });
      })
      .catch((error) => {
        dispatch({ type: GET_TAG_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: GET_TAG_REJECTED, payload: error.message });
  }
};

/**
 * @param patch
 * @function tagStatusUpdate
 * @desc Send request to server to update tag status using thunk-middleware
 */
export const tagStatusUpdate =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`${api_link}/tag-status/${id}`, { status })
        .then((res) => {
          dispatch({ type: TAG_STATUS_FULFILL, payload: res.data.tag });
        })
        .catch((error) => {
          dispatch({ type: TAG_STATUS_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: TAG_STATUS_REJECTED, payload: error.message });
    }
  };

/**
 * @param post
 * @function createTag
 * @description send create tag request using thunk-middleware
 */
export const createTag = (input) => async (dispatch) => {
  try {
    console.log(input);
    await axios
      .post(api_link + 'tag', { name: input })
      .then((res) => {
        dispatch({ type: CREATE_TAG_FULFILL, payload: res.data.tag });
      })
      .catch((error) => {
        dispatch({ type: CREATE_TAG_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: CREATE_TAG_REJECTED, payload: error.message });
  }
};

/**
 * @param put
 * @function tagUpdate
 * @desc Send request to server to update tag using thunk-middleware
 */
export const tagUpdate =
  ({ data, setEditModal, id }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`${api_link}tag/${id}`, data)
        .then((res) => {
          dispatch({ type: TAG_UPDATE_FULFILL, payload: res.data.tags });
          setEditModal(() => (prevState) => ({ ...prevState, show: false }));
        })
        .catch((error) => {
          dispatch({ type: TAG_UPDATE_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: TAG_UPDATE_REJECTED, payload: error.message });
    }
  };

/**
 * @param delete
 * @function deleteTag
 * @desc Send request to server to delete tag using thunk-middleware
 */
export const deleteTag = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`${api_link}tag/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TAG_FULFILL, payload: id }); // send this id to match with link id to delete single tag
      })
      .catch((error) => {
        dispatch({ type: DELETE_TAG_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_TAG_REJECTED, payload: error.message });
  }
};

/**
 * category start
 * @param get
 * @function getCategories
 * @description get category request using thunk-middleware
 */
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQ });
    await axios
      .get(api_link + 'category')
      .then((res) => {
        dispatch({ type: GET_CATEGORY_FULFILL, payload: res.data.categories });
      })
      .catch((error) => {
        dispatch({ type: GET_CATEGORY_REJECTED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_REJECTED, payload: error.message });
  }
};

/**
 * @param post
 * @function createCategory
 * @description get category request using thunk-middleware
 */
export const createCategory =
  ({ data }) =>
  async (dispatch) => {
    try {
      await axios
        .post(api_link + 'category', data)
        .then((res) => {
          dispatch({ type: CREATE_CATEGORY_FULFILL, payload: res.data.category });
        })
        .catch((error) => {
          dispatch({ type: CREATE_CATEGORY_REJECTED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: CREATE_CATEGORY_REJECTED, payload: error.message });
    }
  };
