import React from 'react';
import { Link } from 'react-router-dom';
import '../Student/Student.css'

const Student = ({student}) => {
    const {name, passion, userEmail}= student;
    
    const present = () =>{
        const studentName = name;
        const studentEmail = userEmail;
        const status = 'present';
        const presentStudent = {
            studentName : studentName,
            status:status,
            studentEmail:studentEmail
        }
        fetch(`http://localhost:5000/present`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(presentStudent)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        
    })
    }
    const absent = () =>{
        const studentName = name;
        const studentEmail = userEmail;
        const status = 'absent';
        const absentStudent = {
            studentName : studentName,
            status:status,
            studentEmail:studentEmail
        }
        fetch(`http://localhost:5000/absent`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(absentStudent)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        
    })
    }



    return (
        <div>
           
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><h3>Name :</h3></th>
                        <th><h3>Email:</h3></th>
                        <th><h3>Passion:</h3></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td>{name}</td>
                        <td>{userEmail}-</td>
                        <td>{passion ==='student' ? <span> <Link className='btn btn-primary' to ="" onClick={present}> Present </Link> <Link className='btn btn-primary' to='' onClick={absent}> Absent</Link></span>:''}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Student;