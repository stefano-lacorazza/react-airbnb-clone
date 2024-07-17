import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/actionTypes';
import { Action } from '../types/actionTypes';
import { AuthState } from '../types/authTypes';


const initialState: AuthState = {
  token: null,
  isLoggingIn: false,
  isLoggedIn: false,
  currentUser: null,
  error: null,
};



export const authReducer = (state: AuthState = initialState, action: Action) => {
  

  
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,

      };
    case LOGIN_SUCCESS:

      const newState = {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        currentUser: action.payload,
        token: action.payload.token,
      };

      return newState;
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:

      return state;
  }
};