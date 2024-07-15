import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const SignUp: React.FC = () => {
    
  return (
    <>
<form className='sign-up-form'>
    <h2 className='sign-up-form__title'>Sign Up</h2>

    <Input
        type='text'
        name='full-name'
        datatestid='auth-full-name'
        text='Full Name'
        onChange={() => {}}
    />
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

    <Button onClick={() => window.location.href = '/'} text='Sign Up' className='button'  datatestid = 'auth-submit'/>
</form>
<span>
Already have an account?  <a data-test-id = 'auth-sign-up-link' href='/sign-in' className = 'sign-up-form__link'>Sign In</a>
</span>
</>
  );
};

export default SignUp;