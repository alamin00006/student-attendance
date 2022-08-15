import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../Navber/Navber.css'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navber = () => {

  const [user] = useAuthState(auth);


  const [students, setStudent] = useState([])
  const [teachers, setTeacher] = useState([])


  useEffect(() =>{
   const url = "http://localhost:5000/student";
   fetch(url)
   .then(res =>res.json())
   .then(data => setStudent(data));
   
},[])
  useEffect(() =>{
   const url = "http://localhost:5000/teacher";
   fetch(url)
   .then(res =>res.json())
   .then(data => setTeacher(data));
   
},[])

  const logOut = () =>{
    signOut(auth);
  }
    return (
        <div className='bg-dark'>
          <Navbar>
      <Container>
      <Link className='text-white'to="/" class="btn btn-ghost">Student Managment</Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>

    {user?<button className='text-white' onClick={logOut}>Logout</button> : <NavLink className='text-white' to ='/login'>Login</NavLink>}
     
      {/* <NavLink to ='/student'>Student Sing in</NavLink> */}

   <NavLink className='text-white' to ='/teacher'>Teacher</NavLink>
        <NavLink className='text-white' to ='/student'>Students</NavLink>
        <NavLink className='text-white' to ='/prStudent'>Present Students</NavLink>
        <NavLink className='text-white' to ='/absent'>Absent Students</NavLink>
    
      
       
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        </div>
    );
};

export default Navber;