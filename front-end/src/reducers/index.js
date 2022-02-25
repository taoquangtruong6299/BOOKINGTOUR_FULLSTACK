import { combineReducers } from "redux";
import accountReducer from "./accountReducer"

const reducers = combineReducers({
  users: accountReducer

})

export default reducers
