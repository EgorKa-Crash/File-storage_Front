import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileService from '../services/FileService'

function FileComponentMainPerson(user) {


    const [files, setFiles] = useState([])

    function componentDidMount() {
        FileService.getFiles(user.user_id).then((response) => {
            setFiles(response.data)
        });
    }

    useEffect(() => {
        componentDidMount();
    }, [])

    // async function fetchPersons(e) { // 
    //     e.preventDefault();
    //     await axios.put('http://localhost:9090/file/'+file_id); 
    // }

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
                                <select
                                    className="form-select"
                                >
                                    <option selected>{file.availability}</option>
                                    <option value={1}>
                                        {
                                            file.availability == 'Private'?
                                            ('Public'):
                                            ('Private')
                                        }
                                        </option> 
                                </select>
                            </div>

                            <div className="col-md-auto ">
                                <a href="#" className="btn btn-primary">
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