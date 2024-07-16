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
  console.log('reducer', action);

  
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,

      };
    case LOGIN_SUCCESS:
      console.log('reducer login success');
      console.log(state);
      const newState = {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        currentUser: action.payload,
        token: action.payload.token,
      };
      console.log('newstate:',newState); // This will log the new state
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
      console.log('default',state);
      return state;
  }
};