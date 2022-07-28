import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileService from '../services/FileService'
import FileString from './FileString';
import SelectBar from './SelectBar';

function FileComponentMainPerson(user) {


    const [files, setFiles] = useState([])


    function componentDidMount() {
        FileService.getFiles().then((response) => {
            setFiles(response.data)
        });
    }

    async function deleteFile(e, file_id) {
        e.preventDefault();
        await FileService.deleteFile(file_id);
        setFiles(files.filter(i => i.fileId != file_id));
    }

    function date_time(time) {
        return time.slice(0, -13).replaceAll('T', ' ');
    }

    useEffect(() => {
        componentDidMount();
    }, [])


    return (
        <div>
            {
                files.map(
                    file =>
                        <>
                            <div
                                className="rounded"
                                style={{ backgroundColor: "#ffffff" }}
                                key={file.toString()}
                            >
                                <div class="row rounded  p-2 m-2 ">
                                    <div className="col-md-4 p-2 text-truncate" title={file.name}>{file.name}</div>
                                    <div className="col" />
                                    <div className="col-md-auto p-2 date" title="Время добавления документа">{date_time(file.createdDate)}</div>
                                    <div className="col-md-auto p-2" title="Вес файла">{Math.round(file.capacity / 1024)} КБ</div>

                                    <div className="col-sm-auto" title="Открытость файла для других пользователей">
                                        <SelectBar file={file} />
                                    </div>

                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary" onClick={(e) => deleteFile(e, file.fileId)}>
                                            Удалить
                                        </a>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary" onClick={() => FileService.downloadFile(file)}>
                                            ⤓ Скачать
                                        </a>
                                    </div>
                                </div>
                                {file.parantFile != null ?
                                    <FileString file={file.parantFile} date_time={date_time} deleteFile={deleteFile} />
                                    : <></>}

                            </div>
                        </>
                )
            }

        </div>
    );
}
export default FileComponentMainPerson