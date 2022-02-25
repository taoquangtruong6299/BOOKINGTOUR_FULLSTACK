import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Header from './components/layouts/header';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsUser, GetDetailsUser } from './actions';
import Profile from './components/auth/Profile';




function App(props) {
  let dispath = useDispatch();

  const [loggedInStatus,setLoggedInStatus] = useState("");
  const [user, setUser] = useState({});
  useEffect(()=> {
    dispath(DetailsUser());

  },[])
  let userLogin = useSelector((state) => state.users.user_login);
  let StatusLoggedIn = useSelector((state) => state.users.loggedInStatus);
  console.log(userLogin);



  return (
    <BrowserRouter>
      <div className="container">
        { userLogin ? (
          <Header  loggedInStatus={StatusLoggedIn}  user={userLogin.email}></Header>
        ):(
          <Header></Header>
        )
        }



            <Routes>
              {/* <Route path="/" element={<Home handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={loggedInStatus} />} /> */}

              <Route path="/sign_in" element={<Login />}/>
              <Route path="/sign_up" element={<Registration />}/>
              { userLogin ? (<Route path="/profile" element={<Profile User={userLogin}/>}/>):null}

              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>


      </div>
    </BrowserRouter>

  );
}

export default App;
