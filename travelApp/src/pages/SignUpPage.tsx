import React from 'react';
import SignUp from '../components/features/SignUp';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

// Import other components and assets here

const SignUpPage: React.FC = () => {
  return (
<>
<Header logged={false} ></Header>

<main className='sign-up-page'>

<SignUp></SignUp>
</main>

<Footer centerText='By Stefano Lacorazza'></Footer>
</>
  );
};

export default SignUpPage;