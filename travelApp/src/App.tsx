// App.tsx or your main component file
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SIgnInPage';
import BookingsPage from './pages/BookingsPage';
import TripPage from './pages/TripPage';
// Import other pages/components here

const App: React.FC = () => {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/trip/:tripId" element={<TripPage/>} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
};





export default App;