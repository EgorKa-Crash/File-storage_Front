import axios from 'axios';

import React, { Component } from 'react';
import UploadFilesService from '../services/UploadFilesService';

class FileLoaderButton extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
    // onFileUpload = () => {

    //     // // Create an object of formData
    //     // const formData = new FormData();

    //     // // Update the formData object
    //     // formData.append(
    //     //     "myFile",
    //     //     this.state.selectedFile,
    //     //     this.state.selectedFile.name
    //     // );

    //     //console.log(this.state.selectedFile);

    //     UploadFilesService.upload(this.state.selectedFile);
    //      //this.props.myFiles();

    //     //axios.post("api/uploadfile", formData);
    // };


    onFileUpload(e) {
        UploadFilesService.upload(this.state.selectedFile);
        var millisecondsToWait = 100;
        setTimeout(() => {
            this.props.myFiles(e);
        }, millisecondsToWait); 
    };

    // // File content to be displayed after
    // // file upload is complete
    // fileData = () => {

    //     if (this.state.selectedFile) {

    //         return (
    //             <div>
    //                 <h2>File Details:</h2>

    //                 <p>File Name: {this.state.selectedFile.name}</p>


    //                 <p>File Type: {this.state.selectedFile.type}</p>


    //                 <p>
    //                     Last Modified:{" "}
    //                     {this.state.selectedFile.lastModifiedDate.toDateString()}
    //                 </p>

    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>
    //                 <br />
    //                 <h4>Choose before Pressing the Upload button</h4>
    //             </div>
    //         );
    //     }
    // };

    render() {

        return (
            < >
                <div className="col-6 p-2">
                    <input className="form-control" type="file" onChange={this.onFileChange} />
                </div>
                <div className="col-md-auto p-2">

                    {this.state.selectedFile == null ?
                        (<button className="btn btn-primary" disabled>
                            Загрузить
                        </button>) :
                        (<button className="btn btn-primary" onClick={(e) => { this.onFileUpload(e) }}>
                            Загрузить
                        </button>)}
                </div>
                <div className="col-md-auto p-2 pe-3">
                    <button className="btn btn-primary" onClick={(e) => { this.props.myFiles(e) }}>
                        ⟳
                    </button>
                </div>
                {/* {this.fileData()} */}
            </ >
        );
    }
}

export default FileLoaderButton;