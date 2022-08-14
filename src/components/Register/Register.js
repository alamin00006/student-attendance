import React from 'react';
import '../Register/Register.css'

const Register = () => {
    return (
        <div className='container student-form'>
            <h2 className='text-center mb-3'>Register Form</h2>
            <form className='text-center'>
                <span className='title'>Are You Teacher or Student </span>
                <select>
                    <option>Student</option>
                    <option>Teacher</option>
                </select><br/>
         <label className='ms-4'>Name: </label>
         <input className=' ms-2 mt-2' placeholder='your Name' type='text'/><br/>
         <label className='ms-4'>Email: </label>
         <input className=' ms-2 mt-2' placeholder='your email' type='email'/><br/>
         <label>Password: </label>
         <input className='ms-2 mt-2' placeholder='your password' type='password'/><br/>
        <button className=' btn btn-primary mt-2'>Create Account</button><br/>
      </form>
        </div>
    );
};

export default Register;