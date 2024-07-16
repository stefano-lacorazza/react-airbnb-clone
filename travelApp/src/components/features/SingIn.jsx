import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../auth/authAction';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Create navigate function
    const { isLoggingIn, isLoggedIn } = useSelector(state => state.auth); // Assuming isLoggedIn indicates login success

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/'); // Redirect on login success
        }
    }, [isLoggedIn, navigate]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
      };

  return (
    <>
<form className='sign-in-form' onSubmit={handleSubmit}>
    <h2 className='sign-in-form__title'>Sign In</h2>

    <Input
        type='email'
        name='email'
        datatestid='auth-email'
        text='Email'
        value={email}
        onChange={handleEmailChange}
    />
        <Input
        type='password'
        name='password'
        datatestid='auth-password'
        text='Password'
        value={password}
        onChange={handlePasswordChange}
    />

    <Button onClick={() =>{}} text='Sign In' className='button' datatestid = 'auth-submit' disabled={isLoggingIn}/>
</form>
<span>
    Don't have an account? <a data-test-id = 'auth-sign-up-link' href='/sign-up' className = 'sign-in-form__link'>Sign Up</a>
</span>
</>
  );
};

export default SignIn;