import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Import your root state type

interface ProtectedRouteProps {
  redirectPath?: string; // Optional custom redirect path
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/log-in' }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); // Use RootState for type safety

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;