import axios from 'axios';
import TokenProvider from './TokenProvider';


class FileService {
    getFiles() {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get('http://localhost:9090/file/allFiles/', requestOptions);
    }

    getPublicFiles(user_id) {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get('http://localhost:9090/file/public/' + user_id, requestOptions);
    }

    editFile(file) {
        const requestOptions = TokenProvider.getRequestOptions();

        return axios({
            method: 'put',
            url: 'http://localhost:9090/file/',
            headers: requestOptions,
            data: file
        });
    }

    deleteFile(file_id) {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.delete('http://localhost:9090/file/' + file_id, requestOptions);
    }

    downloadFile(file) {
        // const requestOptions = TokenProvider.getRequestOptions();
        // var response = axios.get('http://localhost:9090/file/download/', {
        //     responseType: 'blob',
        // }, requestOptions);
        // console.log(response);
         var fileDownload = require('js-file-download');
        // fileDownload(response.data, 'my.txt');

        // return response;

        axios.get('http://localhost:9090/file/download/' + file.fileId, {
            responseType: 'blob',
          }).then(res => {
            //console.log(res.data);
            fileDownload(res.data, file.name);
          }); 
    } 
}
export default new FileService();