// App.tsx or your main component file
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SIgnInPage';
import BookingsPage from './pages/BookingsPage';
import TripPage from './pages/TripPage';
import ProtectedRoute from './components/auth/ProtectedRoute.tsx';
import { TripProvider } from './utils/tripContext.tsx'

const App: React.FC = () => {




  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
        
          <Route path="/" element={<TripProvider><MainPage /></TripProvider>} /> 
          <Route path="/bookings" element={<TripProvider><BookingsPage /></TripProvider>} />
          <Route path="/trip/:tripId" element={<TripProvider><TripPage/></TripProvider>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};





export default App;