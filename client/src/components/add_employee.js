import React, {useState} from 'react';

// import Button from './UI/Button';
// import Button from './UI/Button'
import axios from 'axios';


const url = 'http://localhost:8090/add_employee';
const Add_employee = (props)=>
{
const [Employee_To_add, setEmployee_To_add]= useState({
    // firstName: '',
    // lastName: '',
    // email: ''
});

const  handleSubmit= (event)=> {
    console.log( Employee_To_add);
    axios.post(url,Employee_To_add).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    });
    props.show();
    
    event.preventDefault();
  }
    return(
    <React.Fragment>

<body>
    
    <main>
    <form onSubmit={handleSubmit}>
            <label for="title"></label>
            <br/>
            Name
            <input type="text" id="fname" name="firstName" placeholder="Enter your first name"
            onChange={(e)=>setEmployee_To_add({...Employee_To_add,firstName: e.target.value})}
            >
                </input> <br/>
            lastName
            <input type="text" id="lname" name="lastName" placeholder="Enter your last name"
            onChange={(e)=>setEmployee_To_add({...Employee_To_add,lastName: e.target.value})}
            >
            
                </input><br/>
            Email
            <input type="email" id="lname" name="email" placeholder="Enter your Email"
            onChange={(e)=>setEmployee_To_add({...Employee_To_add,email: e.target.value, id: Math.floor(Math.random() * 30000)})}
            ></input><br/>
            <br/>
            <br/>
           
            
              <br/>
              <input type="submit" value="Submit" />
        </form>

       
  
    </main>

    
</body>
</React.Fragment>
 
    );
};

export default Add_employee;