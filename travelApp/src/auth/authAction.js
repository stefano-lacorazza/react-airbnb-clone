import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE  } from '../types/actionTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logout = () => ({
  type: LOGOUT,
});

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

const loginUser = (credentials) => (dispatch) => {
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
    console.log(response);
    if (response.ok) {
      
      return response.json();
    } else {
      return response.status
    }
  })
  .then(data => {
    dispatch(loginSuccess({ username: data.user.email })); // Adjust according to the actual response structure
  })
  .catch(error => {
    dispatch(loginFailure(error.message));
  });



};

const signupUser = (userData) => (dispatch) => {
  dispatch(signupRequest());
  fetch('https://travel-app-api.up.railway.app/api/v1/auth/sign-up', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: userData.name, 
      email: userData.email,
      password: userData.password,
      
    }),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Signup failed');
    }
  })
  .then(data => {
    dispatch(signupSuccess({ username: data.user.email })); // Adjust according to the actual response structure
  })
  .catch(error => {
    dispatch(signupFailure(error.message));
  });
};


export { loginUser, logout, signupUser };