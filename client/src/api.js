import axios from 'axios';
const url = 'http://localhost:8090/';


 
export const  createApiClient= ()=> {
    return {
        get_all_employees: async() =>{
             await axios.get(url+'AllEmployees').then((res)=>{
                console.log(res.data);
                return res.data;
            })
            .catch((e)=>
            console.log(e)
            );
            
        }
    }
}