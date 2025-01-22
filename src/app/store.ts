import { configureStore, Reducer, UnknownAction } from '@reduxjs/toolkit'; // Import the Reducer and UnknownAction types
import { authReducer } from './reducers';
import { AuthState } from '../types/authTypes';
import { User } from '../types/user';

const store = configureStore({
  reducer: {
    auth: authReducer as Reducer<AuthState | { token:string; isLoggingIn: boolean; error: { name: string, message: string, Error: Error; }; isLoggedIn: boolean; currentUser: User | null; }, UnknownAction, AuthState | { token:string; isLoggingIn: boolean; error: { name: string, message: string, Error: Error; }; isLoggedIn: boolean; currentUser: User | null; }>,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export default store;