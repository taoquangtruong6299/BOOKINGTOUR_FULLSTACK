import Login from "./auth/Login";
import Registration from "./auth/Registration";
import React from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';

function Home(props) {
  const history = useNavigate();

  const handleSuccessfulAuth = (data)=> {
    props.handleLogin(data);
    history("/dashboard")
  }

  const handleLogoutClick = () => {
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response =>{
      props.handleLogout();
    }).catch(error => {
      console.log("logout error",error);
    })
  }
  return(
    <>
    <div>Home</div>
    <div>{props.loggedInStatus}</div>
    <button onClick={handleLogoutClick}>Logout</button>
    <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
    <Login handleSuccessfulAuth={handleSuccessfulAuth}></Login>
    </>
  )
}

export default Home;
