import React from 'react';
import SignIn from '../components/features/SingIn'
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

// Import other components and assets here

const SignInPage: React.FC = () => {
  return (
<>
<Header logged={false} ></Header>

<main className='sign-in-page'>

<SignIn></SignIn>
</main>

<Footer centerText='By Stefano Lacorazza'></Footer>
</>
  );
};

export default SignInPage;