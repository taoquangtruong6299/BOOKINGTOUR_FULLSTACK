import { Button, Container, Navbar } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsUser, LogOut } from '../../actions';
import { useEffect } from 'react';
import { Router, useNavigate } from "react-router";
import { Link } from 'react-router-dom';


function Header(props) {

  const dispath = useDispatch();
  console.log(props.user);
  console.log(props.loggedInStatus);


  const handleLogoutClick = () => {
    console.log("logout");
    dispath(LogOut());
  }
  return(
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/sign_in">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            { props.user && props.loggedInStatus ? (
               <Navbar.Text>
               Signed in as: <a href="/profile" >{props.user}</a>
               <Navbar.Text>
               <Button variant="primary" type="submit" onClick={handleLogoutClick}>
                 Logout
               </Button>
               </Navbar.Text>
               </Navbar.Text>
            ):(<Navbar.Text>

            <a href="/sign_in">
             <Button variant="primary" type="submit" >
               Sign In
             </Button>
            </a>
           </Navbar.Text>)
            }
            <Link to="/sign_in">Sign_in</Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
