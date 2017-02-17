import {combineReducers} from "redux"

import userReducer from "./reducer-user.js"


const allReducer = combineReducers({
    users : userReducer
})
export default allReducer;