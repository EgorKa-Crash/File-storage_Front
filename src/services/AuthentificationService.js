import axios from 'axios';
  

class AuthentificationService{ 
    login(logDate){
        return axios.post('http://localhost:9090/auth/login',logDate);
    } 
 
} 
export default new AuthentificationService();