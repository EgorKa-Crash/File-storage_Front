import React from 'react'
import FileService from '../services/FileService'
import FileStringShort from './FileStringShort';

class FileComponentMainPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    date_time(time) {
        return time.slice(0, -13).replaceAll('T', ' ');
    }

    componentDidMount() {
        FileService.getPublicFiles(this.props.user_id).then((response) => {
            this.setState({ files: response.data })
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.files.map(
                        file =>
                            <>
                                <div
                                    className="rounded "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div class="row rounded  p-2 m-2 ">
                                        <div className="col-md-7 p-2 text-truncate" data-bs-toggle="tooltip" data-bs-placement="bottom" title={file.name}>{file.name}</div>
                                        <div className="col-md-auto p-2 date" title="Время добавления документа">{this.date_time(file.createdDate)}</div>
                                        <div className="col" />
                                        <div className="col-md-auto p-2">{Math.round(file.capacity / 1024)} КБ</div>

                                        <div className="col-md-auto ">
                                            <a href="#" className="btn btn-primary" onClick={() => FileService.downloadFile(file)}>
                                                ⤓ Скачать
                                            </a>
                                        </div>
                                    </div>

                                    {file.parantFile != null ?
                                        <FileStringShort file={file.parantFile} date_time={this.date_time} />
                                        : <></>}
                                </div>
                            </>
                    )
                }
            </div>
        );
    }
}
export default FileComponentMainPerson