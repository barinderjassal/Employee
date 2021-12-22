import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import { EmployeeForm } from './component/Employee-form';

function App() {
  return (
    <div className='container'>
      <Router>
        <div className='col-md-12'>
          <h1 className='text-center' style={style}>
            {' '}
            Employee Records
          </h1>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/add' component={EmployeeForm} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: 'red',
  margin: '10px',
};

export default App;
