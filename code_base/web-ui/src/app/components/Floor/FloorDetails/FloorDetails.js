import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import './FloorDetails.css'


const floorDetails = (props) => {
    return (

        <div className="floorDiv">
            <div className="formDisplay">
                <span className="floorName">Floor Name</span>
                <TextField id="floor" variant="outlined" className="floorNameInput" onChange={props.floorInput}/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="openDesk">Open Desks</span>
                <TextField id="opendesk" variant="outlined" className="floorNameInput" onChange={props.opendeskInput}/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="busyDesk">Reserved Desks</span>
                <TextField id="reservedDesk" variant="outlined" className="floorNameInput" onChange={props.reservedDeskInput}/>
            </div>
            {/* 
            TODO: Moving this to next release
            <Divider style={{marginTop:'30px'}}/>
            <FontAwesomeIcon icon="file-upload" className="uploadButton"/>
            <p className="uploadText">Upload Desk Plan</p>
            <p className="helpText">Only Excel files can be uploaded</p> */}
        </div>
    )
}

export default floorDetails;