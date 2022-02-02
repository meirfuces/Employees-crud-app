
import React, {useState, useEffect} from 'react';
import './App.css';
import Employees from './components/employees';
import Add_employee from './components/add_employee';
import axios from 'axios';
import MainHeader from './layout/mainHeader';
import {useEmployees} from '../src/hooks/useEmployees';
const url = 'http://localhost:8090/';

const App =() => {
  const {EmployeesData, Loading}= useEmployees();
  
  const [showEmployee, setshowEmployee] = useState(false);
  const showEmployeesButten = ()=>{
    setshowEmployee(!showEmployee)
  }
  return (
    <div className='center'>
      <h1> Employee maneger</h1>
      <button onClick ={showEmployeesButten}>show employees</button>
    {showEmployee && <Employees EmployeesData = {EmployeesData} Loading= {Loading}/>} 
    {<Add_employee />}
    </div>
  );
}

export default App;
