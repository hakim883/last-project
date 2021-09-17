import Axios from 'axios';
import {
  POSTE_CREATE_FAIL,
  POSTE_CREATE_REQUEST,
  POSTE_CREATE_SUCCESS,
  POSTE_DETAILS_FAIL,
  POSTE_DETAILS_REQUEST,
  POSTE_DETAILS_SUCCESS,
  POSTE_LIST_FAIL,
  POSTE_LIST_REQUEST,
  POSTE_LIST_SUCCESS,
  POSTE_UPDATE_REQUEST,
  POSTE_UPDATE_SUCCESS,
  POSTE_UPDATE_FAIL,
  POSTE_DELETE_REQUEST,
  POSTE_DELETE_FAIL,
  POSTE_DELETE_SUCCESS,
 
  POSTE_REVIEW_CREATE_REQUEST,
  POSTE_REVIEW_CREATE_SUCCESS,
  POSTE_REVIEW_CREATE_FAIL,
} from '../constants/posteConstants';

export const listPostes = ({
  pageNumber = '',
  seller = '',
  name = '',
  rating = 0,
}) => async (dispatch) => {
  dispatch({
    type: POSTE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `/api/postes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&rating=${rating}`
    );
    dispatch({ type: POSTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POSTE_LIST_FAIL, payload: error.message });
  }
};



export const detailsPoste = (posteId) => async (dispatch) => {
  dispatch({ type: POSTE_DETAILS_REQUEST, payload: posteId });
  try {
    const { data } = await Axios.get(`/api/postes/${posteId}`);
    dispatch({ type: POSTE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POSTE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPoste = () => async (dispatch, getState) => {
  dispatch({ type: POSTE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/postes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: POSTE_CREATE_SUCCESS,
      payload: data.poste,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POSTE_CREATE_FAIL, payload: message });
  }
};
export const updatePoste = (poste) => async (dispatch, getState) => {
  dispatch({ type: POSTE_UPDATE_REQUEST, payload: poste });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/postes/${poste._id}`, poste, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: POSTE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POSTE_UPDATE_FAIL, error: message });
  }
};
export const deletePoste = (posteId) => async (dispatch, getState) => {
  dispatch({ type: POSTE_DELETE_REQUEST, payload: posteId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/postes/${posteId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: POSTE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POSTE_DELETE_FAIL, payload: message });
  }
};
export const createReview = (posteId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: POSTE_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `/api/postes/${posteId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: POSTE_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POSTE_REVIEW_CREATE_FAIL, payload: message });
  }
};
