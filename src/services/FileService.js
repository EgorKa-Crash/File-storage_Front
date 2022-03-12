import axios from 'axios';
 
// const FILES_REST_API_URL = 'http://localhost:9090/file';

class FileService{
    getFiles(user_id){
        return axios.get('http://localhost:9090/file/public/'+user_id);
    } 
} 
export default new FileService();