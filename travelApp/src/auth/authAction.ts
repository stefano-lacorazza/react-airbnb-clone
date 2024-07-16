import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE  } from '../types/actionTypes';
import { User } from '../types/user';
import { Dispatch } from 'redux';
const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user:User) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error:Error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logout = () => ({
  type: LOGOUT,
});

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = (user:User) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const signupFailure = (error:Error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

type Credentials = {
  name?: string;
  email: string;
  password: string;
};

export interface SignupAction {
  type: string;
  payload: { token: string; user: User; };
}


const loginUser = (credentials:Credentials) => (dispatch: Dispatch) => {
  dispatch(loginRequest());
  console.log(credentials);
  fetch('https://travel-app-api.up.railway.app/api/v1/auth/sign-in', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
    
  })
  .then(response => {
 
    if (response.ok) {
      const res = response.json();
      console.log(res);
      return res; 
    } else {
      return response.status;
    }
  })
  .then(data => {
    if (data) {
      dispatch(loginSuccess({ fullName: data.user.fullName, email: data.user.email, createdAt: data.user.createdAt })); 
    }
  })

  .catch(error => {
    dispatch(loginFailure(error.message));
  });



};

const signupUser =  (credentials:Credentials) => (dispatch: Dispatch) => {
  dispatch(signupRequest());
  
  fetch('https://travel-app-api.up.railway.app/api/v1/auth/sign-up', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: credentials.name, 
      email: credentials.email,
      password: credentials.password,
      
    }),
    
  })
  .then(response => {
 
    if (response.ok) {
      const res = response.json();
      console.log(res);
      return res; 
    } else {
      return response.status;
    }
  })
  .then(data => {
    
    dispatch(loginSuccess({ fullName: data.user.fullName, email: data.user.email, createdAt: data.user.createdAt })); 
  })
  .catch(error => {
    dispatch(signupFailure(error.message));
  });
};


export { loginUser, logout, signupUser };