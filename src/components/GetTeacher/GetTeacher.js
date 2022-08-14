import React, { useEffect, useState } from 'react';
import Teacher from './Teacher';

const GetTeacher = () => {

    const [teachers, setTeacher] = useState([])

    useEffect(() =>{
     const url = "http://localhost:5000/teacher";
     fetch(url)
     .then(res =>res.json())
     .then(data => setTeacher(data));
 },[])
    return (
        <div>
            <h1>All Teacher</h1>
            {
                teachers.map(teacher => <Teacher key={teacher._id} teacher={teacher}></Teacher>)
            }
        </div>
    );
};

export default GetTeacher;