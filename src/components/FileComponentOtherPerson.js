import React from 'react'
import FileService from '../services/FileService'

class FileComponentMainPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    componentDidMount() {
        FileService.getFiles(this.props.user_id).then((response) => {
            this.setState({ files: response.data })
        });
    }

    

    render() {
        return (
            <div> 
                {
                    this.state.files.map(
                        file =>
                            <div
                                className="row rounded p-2 m-2 "
                                style={{ backgroundColor: "#ffffff" }}
                            >
                                <div className="col-sm-2 p-2">{file.name}</div>
                                <div className="col-md-auto p-2">{file.capacity} byte</div>
                                <div className="col" /> 
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
}
export default FileComponentMainPerson