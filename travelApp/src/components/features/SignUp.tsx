import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';;
import { signupUser } from '../../auth/authAction';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../app/store'; // Import your RootState type
import { TypedUseSelectorHook, useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type DispatchType = ThunkDispatch<RootState, undefined, AnyAction>;
export const useDispatch = () => reduxUseDispatch<DispatchType>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggingIn, isLoggedIn } = useSelector(state => state.auth); // Assuming isLoggedIn indicates login success

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/'); // Redirect on login success
        }
    }, [isLoggedIn, navigate]);
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        dispatch(signupUser({ email, password, name: name }));
    };


  return (
    <>
<form className='sign-up-form'  onSubmit={handleSubmit}>
    <h2 className='sign-up-form__title'>Sign Up</h2>

    <Input
        type='text'
        name='full-name'
        datatestid='auth-full-name'
        text='Full Name'
        value={name}
        onChange={handleNameChange}
    />
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
        text='Password'
        datatestid='auth-password'
        value={password}
        onChange={handlePasswordChange}
    />

    <Button onClick={() => {}} text='Sign Up' className='button'  datatestid = 'auth-submit' />
</form>
<span>
Already have an account?  <a data-test-id = 'auth-sign-up-link' href='/sign-in' className = 'sign-up-form__link'>Sign In</a>
</span>
</>
  );
};

export default SignUp;