const {
    POSTE_LIST_REQUEST,
    POSTE_LIST_SUCCESS,
    POSTE_LIST_FAIL,
    POSTE_DETAILS_REQUEST,
    POSTE_DETAILS_SUCCESS,
    POSTE_DETAILS_FAIL,
    POSTE_CREATE_REQUEST,
    POSTE_CREATE_SUCCESS,
    POSTE_CREATE_FAIL,
    POSTE_CREATE_RESET,
    POSTE_UPDATE_REQUEST,
    POSTE_UPDATE_SUCCESS,
    POSTE_UPDATE_FAIL,
    POSTE_UPDATE_RESET,
    POSTE_DELETE_REQUEST,
    POSTE_DELETE_SUCCESS,
    POSTE_DELETE_FAIL,
    POSTE_DELETE_RESET,
   
    POSTE_REVIEW_CREATE_REQUEST,
    POSTE_REVIEW_CREATE_SUCCESS,
    POSTE_REVIEW_CREATE_FAIL,
    POSTE_REVIEW_CREATE_RESET,
  } = require('../constants/posteConstants');
  
  export const posteListReducer = (
    state = { loading: true, postes: [] },
    action
  ) => {
    switch (action.type) {
      case POSTE_LIST_REQUEST:
        return { loading: true };
      case POSTE_LIST_SUCCESS:
        return {
          loading: false,
          postes: action.payload.postes,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case POSTE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
 
  
  export const posteDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case POSTE_DETAILS_REQUEST:
        return { loading: true };
      case POSTE_DETAILS_SUCCESS:
        return { loading: false, poste: action.payload };
      case POSTE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const posteCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTE_CREATE_REQUEST:
        return { loading: true };
      case POSTE_CREATE_SUCCESS:
        return { loading: false, success: true, poste: action.payload };
      case POSTE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case POSTE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const posteUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTE_UPDATE_REQUEST:
        return { loading: true };
      case POSTE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case POSTE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case POSTE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const posteDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTE_DELETE_REQUEST:
        return { loading: true };
      case POSTE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case POSTE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case POSTE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const posteReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTE_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case POSTE_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case POSTE_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case POSTE_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  