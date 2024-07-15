import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/actionTypes';

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

export { loginUser, logout };