import comments from './comments'
import auth from './auth'
import { combineReducers } from "redux";

export default combineReducers({
    comments,
    auth
})