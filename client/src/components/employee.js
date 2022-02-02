import React, {useState} from 'react';
import './css/employee.css';
import axios from 'axios';
import Update_Employee from '../components/UI/update_employee';


const url = 'http://localhost:8090/delete/';
const Employee = (props)=>

{
    const [edit, setEdit] = useState(false);
    const deleteHandler = ()=>{
        console.log('delete');
        axios.delete(url+props.id).then((res)=>{
            console.log(res);
        }).catch((e)=>{
            console.log(e);
        });
        props.deleteEmployee(props.id);
    };
    const editHandler = ()=>{
        setEdit(!edit);
        console.log(props.employee);
        console.log(edit);
    }
    const updateHandler = (employee)=>{
        setEdit(false);
        console.log(employee);
        props.updateAfterEdit(employee)
    }
    return(
    <div className="center">
        {!edit &&      <li className="employee-item">
    
        
    <h2>{props.employee.firstName}</h2>
    
    <p>{props.employee.lastName}</p>
    <p>{props.employee.email}</p>
    <button onClick= {deleteHandler}>delete me</button>
    <button onClick= {editHandler}>edit me</button>

    </li>}
   
    {edit &&<Update_Employee 
    id ={props.employee.id}
    firstName = {props.employee.firstName}
    lastName = {props.employee.lastName}
    email = {props.employee.email}
       updateHandler = {updateHandler} 
       editHandler = {editHandler}
    key = {props.employee.id}/>}
    
    </div>
    );
};

export default Employee;