import { User } from './user';

export interface AuthState {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  currentUser: User | null;
  error?: Error | null;
}