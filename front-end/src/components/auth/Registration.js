import { useState } from "react";
import axios from 'axios';
import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { LogIn, signup } from "../../actions";


function Registration(props) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [registrationErrors,setRegistrationErrors] = useState("");
  const dispath = useDispatch();


  const handleSubmit=(e) => {
    dispath(signup({
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }))
    history("/dashboard")
    e.preventDefault();
  }
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Password Confirmation" value={password_confirmation} onChange={(e)=> setPassword_confirmation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Registration;
