import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../auth/authAction'; // Ensure this action is correctly imported

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Added username state
    const dispatch = useDispatch();
    const { isSigningUp } = useSelector(state => state.auth); // Adjusted for signup state
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser({ email, password, name })); // Adjusted for signup action
    };



  return (
    <>
<form className='sign-up-form'>
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
        datatestid='auth-password'
        value={password}
        onChange={handlePasswordChange}
    />

    <Button onClick={() => window.location.href = '/'} text='Sign Up' className='button'  datatestid = 'auth-submit' disabled={isSigningUp}/>
</form>
<span>
Already have an account?  <a data-test-id = 'auth-sign-up-link' href='/sign-in' className = 'sign-up-form__link'>Sign In</a>
</span>
</>
  );
};

export default SignUp;