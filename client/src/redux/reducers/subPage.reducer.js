import { OVERVIEW, CLASS, MODULE } from "../actions/actionTypes";

const initialState = {
    current: OVERVIEW,
    id: null
}

const subPage = (state = initialState, action) => {
    switch (action.type) {
        case OVERVIEW:
            return {
                current: OVERVIEW,
                id: null
            };
        case CLASS:
            return {
                current: CLASS,
                id: null
            };
        case MODULE:
            return {
                current: MODULE,
                id: action.payload.moduleId
            };
        default:
            return state;
    }
}

export default subPage;