import { LOGIN, LOGOUT } from './actionTypes';

export const login = (user: any) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
