import * as actions from "../actions";

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/auth'

const initalState = {
  errorMessage: "",
  token: "",
  user: null,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case actions.REGISTER_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errorMessage: action.payload
      };

    case actions.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    case actions.UPDATE_PHONE_REQUEST:
      return {
        ...state
      }
    case actions.UPDATE_PHONE_SUCCESS:
      return { 
        ...state 
      };
    case actions.UPDATE_PLANT_FAILURE:
      return { 
        ...state 
      };
    default:
      return state;
  }
};
