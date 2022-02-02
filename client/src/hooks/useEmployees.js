
import React ,{ useState, useEffect } from "react";
import axios from "axios";

export const useEmployees = () => {
    const [EmployeesData,setEmployeesData ] = useState(null);
    const [Loading, setLoading] = useState(false);

const url = 'http://localhost:8090/';
  
useEffect(() => {
    const getData = async()=>{
        setLoading(true);
        const res= await axios.get(url+'AllEmployees').then((res)=>{
            return res.data;
        });
        console.log(res);
        setEmployeesData(res);
        setLoading(false);

        console.log(EmployeesData);

    }
    getData();
    // setEmployeesData(data);
}, []); 

  return { EmployeesData, Loading };
};