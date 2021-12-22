import React, { Component } from 'react';
import Employee from './Employees';
import EmployeeSlice from './EmployeeSlice';
import { EmployeeForm } from './Employee-form';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 61,
          fname: 'Bari',
          lname: 'singh',
          dob: '2021-12-01',
          designation: 'SSE',
          experience: '6',
          pictureUrl:
            'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659650_1280.png',
        },
      ],
      employee: null,
    };
  }

  //   onEmpEdit = (employee) => {
  //     const history = useHistory();
  //     console.log(employee);
  //     history.pushState(employee, null, './add');
  //     // this.setState({ employee });
  //   };

  handleOnSubmitEmployeeData = (employee) => {
    console.log(employee);

    this.setState((prevState) => ({
      employees: [...prevState.employees, employee],
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h2 className='text-center'>Employees</h2>
        {this.state.employee
          ? this.renderEmployeeForm(this.state.employee)
          : this.renderEmployeeList(this.state.employees)}

        <EmployeeForm onSubmitEmployeeData={this.handleOnSubmitEmployeeData} />
      </React.Fragment>
    );
  }

  renderEmployeeList(empList) {
    return empList.map((emp) => {
      return <EmployeeSlice key={emp.id} emp={emp}></EmployeeSlice>;
    });
  }

  renderEmployeeForm(employee) {
    return <Employee employee={employee}></Employee>;
  }
}

export default Home;
