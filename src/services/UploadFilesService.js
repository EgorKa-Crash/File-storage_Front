import axios from 'axios';
import TokenProvider from './TokenProvider';



class UploadFilesService {
    upload(file) {
        let formData = new FormData();
        formData.append("file", file);
        

        const requestOptions = TokenProvider.getRequestOptions();
         

        axios.post( 
            'http://localhost:9090/file/upload/',
            formData,
            requestOptions
          ).then(res => {
                if(res.ok) {
                    console.log(res.data);
                    alert("Файл успешно загружен")
                }
            }); 
    } 
}
export default new UploadFilesService();