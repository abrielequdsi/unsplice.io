import { LOGIN, LOGOUT } from '../actions/actionTypes';
import jwtDecode from 'jwt-decode'


const initialState = {
    userInfo: null,
    userPrograms: [],
};

if (localStorage.getItem('jwtToken')) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'))
    console.log(decodedToken)
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('jwtToken');
    } else {
        initialState.userInfo = decodedToken.userInfo;
        initialState.userPrograms = decodedToken.userPrograms;
        console.log(initialState)
    }
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("jwtToken", action.payload.token)
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
}



export default user;