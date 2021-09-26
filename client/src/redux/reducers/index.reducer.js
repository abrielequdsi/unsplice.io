import { combineReducers } from 'redux';
import user from './user.reducer';
import subPage from './subPage.reducer';

export default combineReducers({
    user,
    subPage
})