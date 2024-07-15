import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/actionTypes';
import { Action } from '../types/actionTypes';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  currentUser: User | null;
  error: string | null;
}

const initialState: AuthState = {
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
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        currentUser: action.payload,
        error: null,
      };
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