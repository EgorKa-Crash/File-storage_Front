import React from 'react'
import FileService from '../services/FileService';

function FileStringShort(props) {
    return (
        <>
            <div class="row rounded  p-2 m-2 border-top">
                <div className="col-md-7" />
                <div className="col-md-auto p-2 date" title="Время добавления документа">{props.date_time(props.file.createdDate)}</div>
                <div className="col" />
                <div className="col-md-auto p-2" title="Вес файла">{Math.round(props.file.capacity / 1024)} КБ</div>
                <div className="col-md-auto ">
                    <a href="#" className="btn btn-primary" onClick={() => FileService.downloadFile(props.file)}>
                        ⤓ Скачать
                    </a>
                </div>
            </div>
            {props.file.parantFile != null ?
                <FileStringShort file={props.file.parantFile} date_time={props.date_time} />
                : <></>}
        </>
    );
}
export default FileStringShort