import React, { useEffect, useState } from 'react';

const Absent = () => {
    const [abentStudent, setabsentStudent] = useState([]);
    useEffect(() =>{
        const url = "http://localhost:5000/absent";
        fetch(url)
        .then(res =>res.json())
        .then(data => setabsentStudent(data));
    },[])
    return (
        <div>
            {
             abentStudent.map(student =>
             
             <h6 key={student._id}>{ student.status==='absent'? student.studentName:''
                }
                
                </h6>)
            }
        </div>
    );
};

export default Absent;