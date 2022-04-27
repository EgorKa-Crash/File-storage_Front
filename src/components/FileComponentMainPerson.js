import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileService from '../services/FileService'
import SelectBar from './SelectBar';

function FileComponentMainPerson(user) {


    const [files, setFiles] = useState([])


    function componentDidMount() {
        FileService.getFiles(user.user_id).then((response) => {
            setFiles(response.data)
        });
    }

    async function deleteFile(e, file_id) {
        e.preventDefault();
        await FileService.deleteFile(file_id); 
        setFiles(files.filter(i => i.fileId != file_id));
    }

    useEffect(() => {
        componentDidMount();
    }, [])


    return (
        <div>
            {
                files.map(
                    file =>
                        <div
                            className="row rounded p-2 m-2 "
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <div className="col-sm-2 p-2">{file.name}</div>
                            <div className="col-md-auto p-2">{file.capacity} byte</div>
                            <div className="col" />
                            <div className="col-sm-3">
 

                                <SelectBar file={file} />


                            </div>

                            <div className="col-md-auto ">
                                {/* <a href="#" className="btn btn-primary" onClick={FileService.deleteFile(file.fileId)}>
                                    Delete
                                </a>  */}

                                <a href="#" className="btn btn-primary" onClick={(e) => deleteFile(e, file.fileId)}>
                                    Delete
                                </a>

                            </div>
                            <div className="col-md-auto ">
                                <a href="#" className="btn btn-primary">
                                    Download
                                </a>
                            </div>
                        </div>
                )
            }

        </div>
    );
}
export default FileComponentMainPerson