import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../Navber/Navber.css'
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
          <Navbar>
      <Container>
      <Link to="/" class="btn btn-ghost">Student Managment</Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
      <NavLink to ='/student'>Student Sing in</NavLink>
      <NavLink to ='/teacher'>Teacher Sing in</NavLink>
       
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        </div>
    );
};

export default Navber;