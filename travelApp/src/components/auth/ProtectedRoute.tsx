import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts'; // Import the RootState type for type safety

interface ProtectedRouteProps {
  redirectPath?: string; // Optional custom redirect path
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/sign-in' }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); 


  if (isLoggedIn) {
    return <Outlet />;
  }
  else {
    return <Navigate to={redirectPath} />;
  }
  
}

export default ProtectedRoute;