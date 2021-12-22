import React, { Component, useRef } from 'react';

export const EmployeeForm = ({ onSubmitEmployeeData, emp }) => {
  const fnameRef = useRef('');
  const lnameRef = useRef('');
  const dobRef = useRef('');
  const designationRef = useRef('');
  const pictureRef = useRef('');
  const experineceRef = useRef('');

  const fetchFormValues = () => {
    const enteredFname = fnameRef.current.value;
    const enteredLname = lnameRef.current.value;
    const enteredDob = dobRef.current.value;
    const enteredDesignation = designationRef.current.value;
    const enteredPictureUrl = pictureRef.current.value;
    const enteredExperience = experineceRef.current.value;

    return {
      id: Math.ceil(Math.random() * 100),
      fname: enteredFname,
      lname: enteredLname,
      dob: enteredDob,
      designation: enteredDesignation,
      pictureUrl: enteredPictureUrl,
      experience: enteredExperience,
    };
  };

  console.log(emp);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = fetchFormValues();

    // this is for edit flow
    // if (emp) {
    //   onEmpEdit(formValues);
    //   return;
    // }

    onSubmitEmployeeData(formValues);

    fnameRef.current.value = '';
    lnameRef.current.value = '';
    dobRef.current.value = '';
    designationRef.current.value = '';
    pictureRef.current.value = '';
    experineceRef.current.value = '';
  };
  return (
    <React.Fragment>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='fname'>First Name</label>
            <input
              type='text'
              name='fname'
              ref={fnameRef}
              className='form-control'
              value={emp && (emp.fname || '')}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              name='lname'
              ref={lnameRef}
              className='form-control'
              value={emp && (emp.lname || '')}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='dob'>DOB</label>
            <input
              type='date'
              name='dob'
              ref={dobRef}
              className='form-control'
              value={emp && (emp.dob || '')}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='designation'>Designation</label>
            <input
              type='text'
              name='designation'
              ref={designationRef}
              className='form-control'
              value={emp && (emp.designation || '')}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='profile-photo'>Profile Picture</label>
            <input
              type='url'
              name='profile-photo'
              ref={pictureRef}
              className='form-control'
              value={emp && (emp.pictureUrl || '')}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='experience'>Experience</label>
            <input
              type='text'
              name='experience'
              ref={experineceRef}
              className='form-control'
              value={emp && (emp.experience || '')}
            />
          </div>

          <div className='form-submit-btn'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
