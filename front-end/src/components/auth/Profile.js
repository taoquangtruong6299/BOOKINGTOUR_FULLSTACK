import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { UpdateUser } from "../../actions";

function Profile(props) {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  let message = useSelector((state) => state.users.message);
  let error = useSelector((state) => state.users.error);

  console.log(message);
  const dispatch = useDispatch();
  useEffect(()=>{
    setEmail(props.User.email)
  })
  const handleSubmit = (e) =>{
    dispatch(UpdateUser(props.User.id,{
      user:{
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }))
    // history("/dashboard")
    e.preventDefault();
  }
  return(
    <>
      <h1>Profile User</h1>
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

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email||''} onChange={(e)=> setEmail(e.target.value)}  />
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
          Update
        </Button>
      </Form>
    </>
  )
}

export default Profile;
