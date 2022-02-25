import axios from 'axios';
import { useNavigate } from 'react-router';
import UserDataService from "../services/user.service"
import { createBrowserHistory } from 'history';

import { ADD_USER, CREATE_USER, EDIT_USER, GET_USER, LOGOUT_USER, UPDATE_USER } from './type';
const history = createBrowserHistory();
// export function DetailsUser(data) {
//   return {
//     type: "GETDETAILSUSER",
//     payload: data
//   }
// }
// export function GetDetailsUser() {
//   return function(dispatch) {
//     return  axios.get("http://localhost:3001/logged_in", { withCredentials: true })
//     .then(response => {
//       dispatch(DetailsUser(response.data.user))
//     })
//     .catch(error => {
//       console.log("check login error", error);
//     });
//   };
// }
// const history = useNavigate();


export const LogIn = (data) => async (dispatch) => {
  try {
    const res = await UserDataService.postUser(data);
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
    history.push("dashboard");
    // window.location.reload();

    console.log(res.data);
    console.log("ok dang nhap");
  } catch (err) {
    history.push("sign_in");
    console.log("loi");
    console.log(err);
  }
}

export const DetailsUser = () => async (dispatch) => {
  try {
    const res = await UserDataService.get();
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    });
    // console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const LogOut = () => async (dispatch) => {
  try {
    const res = await UserDataService.logout();
    dispatch({
      type: LOGOUT_USER,
      payload: res.data
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

export const GetAllUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.getAll();
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

export const UpdateUser = (id,data) => async (dispatch) => {
  try {
    const res = await UserDataService.update(id,data);
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

export const signup = (data) => async (dispatch) => {
  try {
    const res = await UserDataService.signup(data);
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
    history.push("dashboard")

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
