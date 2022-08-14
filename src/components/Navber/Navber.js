import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../Navber/Navber.css'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navber = () => {

  const [user] = useAuthState(auth);

  const logOut = () =>{
    signOut(auth);
  }
    return (
        <div>
          <Navbar>
      <Container>
      <Link to="/" class="btn btn-ghost">Student Managment</Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>

    {user?<button onClick={logOut}>Logout</button> : <NavLink to ='/login'> Student Login</NavLink>}
     
      {/* <NavLink to ='/student'>Student Sing in</NavLink> */}

      <NavLink to ='/teacher'>Teacher</NavLink>
      <NavLink to ='/student'>Students</NavLink>
      
       
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        </div>
    );
};

export default Navber;