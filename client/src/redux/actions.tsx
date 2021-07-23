import { LOGIN_REQUEST, REGISTER_REQUEST, USER_LOADING_REQUEST } from './types';

export type User = {
  email: string;
  password: string;
  name?: string;
  token?: any;
  data?: any;
  user?: any;
};

export const loginAction = (user: User) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

export const registerAction = (user: User) => ({
  type: REGISTER_REQUEST,
  payload: user,
});

export const loadUserAction = (token: null | String) => ({
  type: USER_LOADING_REQUEST,
  payload: token,
});

export type AuthAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof registerAction>;

export type LoadUserAction = ReturnType<typeof loadUserAction>;
