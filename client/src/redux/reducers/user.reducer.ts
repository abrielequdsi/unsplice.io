import { LOGIN, LOGOUT } from '../actions/actionTypes';
import jwt_decode from 'jwt-decode';
import { AnyAction } from 'redux';
import { MyToken } from '../../interfaces';

const initialState = {
  userInfo: null,
  userPrograms: [],
};

if (localStorage.getItem('jwtToken')) {
  const token: any = localStorage.getItem('jwtToken');
  const decodedToken = jwt_decode<MyToken>(token);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.userInfo = decodedToken.userInfo;
    initialState.userPrograms = decodedToken.userPrograms.map(
      (userProgram: { _id: string; name: string; programCode: string }) => {
        return {
          ...userProgram,
          id: userProgram._id,
        };
      },
    );
  }
}

const user = (state = initialState, action: AnyAction) => {
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
