
import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';

const GetUser = () => {
    const [students, setStudent] = useState([])

    useEffect(() =>{
     const url = "http://localhost:5000/student";
     fetch(url)
     .then(res =>res.json())
     .then(data => setStudent(data));
 },[])

    return (
        <div>
             <h1>All Student</h1>
            {
                students.map(student => <Student key={student._id} student ={student}></Student>)
            }
        </div>
    );
};

export default GetUser;