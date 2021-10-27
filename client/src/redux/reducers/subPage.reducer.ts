import { OVERVIEW, CLASS, MODULE, CONTENT } from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  current: OVERVIEW,
  id: null,
};

const subPage = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case OVERVIEW:
      return {
        current: OVERVIEW,
        id: null,
      };
    case CLASS:
      return {
        current: CLASS,
        id: null,
      };
    case MODULE:
      return {
        current: MODULE,
        id: action.payload,
      };
    case CONTENT:
      return {
        current: CONTENT,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default subPage;
