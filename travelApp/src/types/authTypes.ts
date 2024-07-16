import { User } from './user';

export interface AuthState {
  token: string | null;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  currentUser: User | null;
  error?: Error | null;
}