import { ADD_USER, CREATE_USER, EDIT_USER, GET_USER, LOGOUT_USER, UPDATE_USER } from "../actions/type";

let stateDefault = {
  list: [],
  user_login: {},
  loggedInStatus: {},
  message:"",
  error:""
}
const reducers = (state = stateDefault, action) => {

  switch (action.type) {
    case GET_USER:
      state.list = action.payload.user
      return {...state};
    case CREATE_USER:
      state.user_login = action.payload.user
      state.loggedInStatus = action.payload.logged_in
      state.message = action.payload.message
      state.error = action.payload.error
      return {...state};
    case EDIT_USER:
      state.user_login = action.payload.user
      state.loggedInStatus = action.payload.logged_in
      console.log(state);
      return {...state};
    case UPDATE_USER:
      state.user_login = action.payload.user
      state.loggedInStatus = action.payload.logged_in
      state.message = action.payload.message
      state.error = action.payload.error
      console.log(state);
      return {...state};
    case LOGOUT_USER:
      state.loggedInStatus = action.payload.logged_in
      return {...state};
    case ADD_USER:
      state.user_login = action.payload.user
      state.loggedInStatus = action.payload.logged_in
      state.message = action.payload.message
      state.error = action.payload.error
      return {...state};
    default:
        return state;
  }
}

export default reducers;
