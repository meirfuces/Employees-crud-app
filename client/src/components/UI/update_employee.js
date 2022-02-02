import React, {useState} from 'react';

// import Button from './UI/Button';
// import Button from './UI/Button'
import axios from 'axios';


const url = 'http://localhost:8090/update';
const Update_Employee = (props)=>
{

const [Employee_to_update
    , setEmployee_to_update
]= useState({
    id: props.id,
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email
});



const  handleSubmit= (event)=> {
    // setEmployee_to_update
    // ({...Employee_to_update
    // , id: (new Date()).getTime()})
    // console.log( Employee_to_update);
    axios.put(url,Employee_to_update
        ).then((res)=>{
    }).catch((e)=>{
        console.log(e);
    });
    props.updateHandler(Employee_to_update)
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
            <input type="text" id="fname" name="firstName" placeholder={Employee_to_update.firstName} 
            onChange={(e)=>setEmployee_to_update
                ({...Employee_to_update
                ,firstName: e.target.value})}
            >
                </input> <br/>
            lastName
            <input type="text" id="lname" name="lastName" placeholder={Employee_to_update.lastName}
            onChange={(e)=>setEmployee_to_update
                ({...Employee_to_update
                ,lastName: e.target.value})}
            >
            
                </input><br/>
            Email
            <input type="email" id="lname" name="email" placeholder={Employee_to_update.email}
            onChange={(e)=>setEmployee_to_update
                ({...Employee_to_update
                ,email: e.target.value})}
            ></input><br/>
            <br/>
            <br/>
           
            
              <br/>
              <button onClick = {props.editHandler}>back</button>
              <input type="submit" value="Submit" />
        </form>

       
  
    </main>

    
</body>
</React.Fragment>
 
    );
};

export default Update_Employee;