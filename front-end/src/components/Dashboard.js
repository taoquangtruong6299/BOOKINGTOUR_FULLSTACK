import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsUser, GetAllUsers } from '../actions';

function Dashboard(props) {
  const [user,setUser] = useState({});
  const dispath = useDispatch();
  let message = useSelector((state) => state.users.message);
  let error = useSelector((state) => state.users.error);

  console.log(message);
  console.log(error);
  // let userLogin = useSelector((state) => state.users.user_login);


  return(
    <>

      <h1>Dashboard</h1>
      { message &&(
        <Alert  variant="success">
        {message}
        </Alert>
      )}
      { error &&(
        <Alert  variant="warning">
        {error}
        </Alert>
      )}


      {/* { userLogin ? (<h1>{userLogin.email}</h1>):(<>Khong nhan</>)} */}


    </>
  )
}

export default Dashboard;
