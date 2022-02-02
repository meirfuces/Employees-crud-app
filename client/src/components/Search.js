import React , {useState} from "react";
import axios from 'axios';
const url = 'http://localhost:8090/get_employee_with_email/';
const Search = (props)=>{
    const [bodySearch, setBodySearch] = useState({})
    
const onSearch = async(bodySearch) =>{
      const res= await axios.get(url+bodySearch.value).then((res)=>{
        //need to update the list
        return res.data;
    }).catch((e)=>{
        console.log(e);
    });
        props.updateList(res);
    }
    return(
  <React.Fragment>
       
            
      

                <input className="inputSearch" type="search" placeholder="Search..." style={{ 'width': '300px' , 'height': '40px'}}
                onChange= {(e) => {

                    setBodySearch({
                         value: e.target.value
                    })}}></input>
       
            <div className="element2" >
            <button className="sendSearch" onClick={() => onSearch(bodySearch)}>search</button>
            </div>
            </React.Fragment>
    )
};

export default Search;

