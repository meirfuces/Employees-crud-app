import React, {useEffect,useState}from 'react';
import Employee from './employee';
import {createApiClient} from '../api';
import './css/employee.css';
import Search from './Search';
import axios from 'axios';


const url = 'http://localhost:8090/';



const Employees = (props)=>
{

    const [EmployeesData,setEmployeesData ] = useState(props.EmployeesData);
    const [noFound,setnoFound] = useState(false);

    console.log(EmployeesData);
    const deleteEmployee = (id)=>{
        console.log('update after delete' + id);
        setEmployeesData(EmployeesData.filter((employee)=> {return id !==employee.id}))
    }
   
    const updateList = (res)=>
    {
        if (res && res.length>0){
        setEmployeesData(res)
setnoFound(false)    }
        else
setnoFound(true)   
 }

const updateAfterEdit = (_employee)=>{
    console.log((_employee));
    const obj = [...EmployeesData];
    const EmployeesDataIndex = EmployeesData.findIndex((employee)=> {return _employee.id===employee.id});
    obj[EmployeesDataIndex] = _employee;
    console.log(obj);
    setEmployeesData(obj);
}
    return(
    <div>
    <h2>employees</h2>
    <Search updateList = {updateList} 
   
    /> 
    {noFound && <p> no found results</p>}
        {props.Loading &&  <p>loading</p>}
     
    {!props.Loading &&   
    
    <ul className="employees-list">{
    EmployeesData? 
    
    
    EmployeesData.map( (emp,index) => 
    {
        return(
          
            <div>
                <Employee key ={emp.index} id = {emp.id} employee ={emp} 
                deleteEmployee = {deleteEmployee}
                updateAfterEdit = {updateAfterEdit}
                />
            
            </div>
        );
        
                }):null}</ul>}
</div>
    );
};

export default Employees;