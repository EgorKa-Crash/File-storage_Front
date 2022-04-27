import axios from 'axios';
  

class FileService{
    getFiles(user_id){
        return axios.get('http://localhost:9090/file/public/'+user_id);
    } 

    editFile(file){
        return axios.put('http://localhost:9090/file/',file);
    } 

    deleteFile(file_id){
        return axios.delete('http://localhost:9090/file/'+file_id);
    }  
} 
export default new FileService();