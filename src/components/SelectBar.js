import React from 'react';
import FileService from '../services/FileService'

function SelectBar(props) {
 
    function chengeSelect() {  
        props.file.availability == "Private" ?
        props.file.availability = "Public" :
        props.file.availability = "Private"
 
        FileService.editFile(props.file); 
    }
 

    return <div>

        <select
        className="form-select" 
           onChange={ chengeSelect} 
           
        >
            <option selected>{props.file.availability}</option>
            <option value={1}>
                {
                    props.file.availability == 'Private' ?
                        ('Public') :
                        ('Private')
                }
            </option>
        </select> 
    </div>;
}

export default SelectBar