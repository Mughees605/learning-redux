import {combineReducers} from "redux"

import userReducer from "./reducers-user.js"


const allReducer = combineReducers({
    users : userReducer
})