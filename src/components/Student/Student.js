import React from 'react';
import '../Student/Student.css'
import { Link } from 'react-router-dom';
const Student = () => {
    return (
        <div className='container student-form'>
            <h2 className='text-center mb-3'>Student Login Form</h2>
            <form className='text-center'>
         <label className='ms-4'>Email: </label>
         <input className=' ms-2 mt-2' placeholder='your email' type='email'/><br/>
         <label>Password: </label>
         <input className='ms-2 mt-2' placeholder='your password' type='password'/><br/>
         <h5> You have No account? <Link to="/register">Create New Account</Link> </h5>
         <button className=' btn btn-primary mt-2'>Login</button><br/>
      </form>
        </div>
    );
};

export default Student;