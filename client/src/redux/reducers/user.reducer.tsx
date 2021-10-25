import { LOGIN, LOGOUT } from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';

import { Token, InitialState } from '../../clientTypes';

const initialState : InitialState = {
  userInfo: null,
  userPrograms: [],
};

let parse;
const value = localStorage.getItem("jwtToken")

if (typeof value === 'string') {
    parse = JSON.parse(value)
}

// alternative solution
// let parse=localStorage.getItem('jwtToken')

if (parse) {
  const decodedToken = jwtDecode<Token>(parse);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.userInfo = decodedToken.userInfo;
    initialState.userPrograms = decodedToken.userPrograms.map((userProgram: { _id: any }) => {
      return {
        ...userProgram,
        id: userProgram._id,
      };
    });
  }
}

const user = (
  state = initialState,
  action: { type: any; payload: { token: string; userInfo: any; userPrograms: any } }
) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('jwtToken', action.payload.token);
      return {
        userInfo: action.payload.userInfo,
        userPrograms: action.payload.userPrograms,
      };
    case LOGOUT:
      localStorage.removeItem('jwtToken');
      return {
        user: null,
        userPrograms: [],
      };
    default:
      return state;
  }
};

export default user;
