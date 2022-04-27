import axios from 'axios';
  

class RegistrationServ{ 
    // getUserByToken(token){
    //     return axios.post('http://localhost:9090/token/getUser',token);
    // }  

     

    addNewUser(user){
        return axios.post('http://localhost:9090/auth/register',user);
    } 
} 
export default new RegistrationServ();