import React from "react";
import { FiStar, FiSettings } from "react-icons/fi";
import {AiOutlineEye} from "react-icons/ai"
import { IconButton } from "@material-ui/core"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"
import avatarimage from "../images/avatar.jpg"
import forms_image from "../images/formsicon.png"
import ColorLensIcon from "@material-ui/icons/ColorLens"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import "./Formheader.css"
function Formheader()
{
    return (
        <div>
            <div className="form_header">
                <div className="form_header_left">
                    <img src={forms_image} style={{height:"45px", width:"40px"}}></img>
                    <input type="text" placeholder="Untitles Form" className="form_name" ></input>
                    <IconButton><FolderOpenIcon className="forn_header_icon" style={{marginRight:"10px"}}></FolderOpenIcon></IconButton>
                    <IconButton><FiStar className="form_header_icon" style={{marginRight:"10px"}}></FiStar></IconButton>
                    <span style={{fontSize:"12px", fontWeight:"600"}}> All changes are saved in Drive</span>
                </div>
                <div className="form_header_right">
                    <IconButton>
                        <ColorLensIcon size="small" className="form_header_icon"></ColorLensIcon>
                    </IconButton>
                    <IconButton>
                        <ColorLensIcon className="form_header_icon"></ColorLensIcon>
                    </IconButton>
                    <IconButton>
                        <FiSettings className="form_header_icon"></FiSettings>
                    </IconButton>
                    <Button variant="contained" color="primary"href="#contained-buttons" >Send</Button>
                    <IconButton>
                        <MoreVertIcon className="form_header_icon"></MoreVertIcon>
                    </IconButton>
                    <IconButton>
                        <Avatar style={{height:"30px", width:"30px"}} src={{avatarimage}}></Avatar>
                    </IconButton>
                
                </div>
            </div>
           
        </div>
    )
}
export default Formheader