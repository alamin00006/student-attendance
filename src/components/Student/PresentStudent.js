import React, { useEffect, useState } from 'react';

const PresentStudent = () => {
    const [prStudent, setPrStudent] = useState([]);
    useEffect(() =>{
        const url = "http://localhost:5000/present";
        fetch(url)
        .then(res =>res.json())
        .then(data => setPrStudent(data));
    },[])
    return (
        <div>
            {
             prStudent.map(student =>
             
             <h6 key={student._id}>{ student.status==='present'? student.studentName:''
                }
                
                </h6>)
            }
        </div>
    );
};

export default PresentStudent;