import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    userInfo: null,
    programInfo: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                userInfo: action.payload.userInfo,
                programInfo: action.payload.userProgram
            };
        case LOGOUT:
            return {
                user: null,
                programInfo: []
            };
        default:
            return state;
    }
}



export default user;