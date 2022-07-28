import axios from 'axios';
  

class RegistrationServ{ 
     
    addNewUser(user){
        return axios.post('http://localhost:9090/auth/register',user);
    } 
} 
export default new RegistrationServ();