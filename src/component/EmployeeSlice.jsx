import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

export default function EmployeeSlice({ emp }) {
  const history = useHistory();
  const addEmployeeHandler = () => {
    console.log(emp);
    history.push('./add');
  };

  const editEmployeeHandler = () => {
    console.log(emp);
    history.push('./add');
  };

  const deleteEmployeeHandler = () => {
    console.log(emp);
  };
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Picture Url</th>
            <th>Add Employee</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{emp.fname}</td>
            <td>{emp.lname}</td>
            <td>
              <img src={emp.pictureUrl} width='50' height='50' alt='avatar' />
            </td>
            <td>
              <button type='button' onClick={addEmployeeHandler}>
                {' '}
                Add Employee
              </button>
            </td>
            <td>
              <button type='button' onClick={editEmployeeHandler}>
                {' '}
                Edit Employee
              </button>
            </td>
            <td>
              <button type='button' onClick={deleteEmployeeHandler}>
                {' '}
                Delete Employee
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <button onClick={(e) => onEmpEdit(emp)}>Edit</button> */}
    </div>
  );
}
