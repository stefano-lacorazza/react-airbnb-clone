import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const SignIn: React.FC = () => {
  return (
    <>
<form className='sign-in-form'>
    <h2 className='sign-in-form__title'>Sign In</h2>

    <Input
        type='email'
        name='email'
        datatestid='auth-email'
        text='Email'
        onChange={() => {}}
    />
        <Input
        type='password'
        name='password'
        datatestid='auth-password'
        text='Password'
        onChange={() => {}}
    />

    <Button onClick={() => window.location.href = '/'} text='Sign In' className='button' datatestid = 'auth-submit' />
</form>
<span>
    Don't have an account? <a data-test-id = 'auth-sign-up-link' href='/sign-up' className = 'sign-in-form__link'>Sign Up</a>
</span>
</>
  );
};

export default SignIn;