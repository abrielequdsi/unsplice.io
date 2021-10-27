import { LOGIN, LOGOUT } from './actionTypes';
import { User } from '../../interfaces';

export const login = (user: User) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
