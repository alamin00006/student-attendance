import React from 'react';

const Teacher = ({teacher}) => {
    const {name, passion, userEmail}= teacher;

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
                    <td>{passion}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Teacher;