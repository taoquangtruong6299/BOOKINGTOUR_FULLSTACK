import { useEffect, useState } from "react";
import axios from 'axios';
import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { LogIn } from "../../actions";


function Login(props) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginErrors,setLoginErrors] = useState("");
  const dispath = useDispatch();
  const handleSubmit=(e) => {
    dispath(LogIn(
      {
        user: {
          email: email,
          password: password
        }
      }
    ))
    history("/dashboard")
    e.preventDefault();
  }
  // useEffect(()=>{
  //   window.location.reload();

  // },[])

  return(
    <>
      <div className="row">
        <div className="col-4">
        </div>
        <div className="col-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}  />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login;
