import { User } from '../types/user';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export type Action =
  | { type: typeof LOGIN_REQUEST }
  | { type: typeof LOGIN_SUCCESS; payload: { token: string; user: User; } }
  | { type: typeof LOGIN_FAILURE; payload: {Error: Error} }
  | { type: typeof LOGOUT }
  | { type: typeof SIGNUP_REQUEST }
  | { type: typeof SIGNUP_SUCCESS; payload: { token: string; user: User; } }
  | { type: typeof SIGNUP_FAILURE; payload: {Error: Error} };