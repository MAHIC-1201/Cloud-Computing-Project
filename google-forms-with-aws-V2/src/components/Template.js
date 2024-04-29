import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "./Template.css"
import partyimage from "../images/partyimage.png"
import contactinfoimage from "../images/contactinfo.png"
import blankformimage from "../images/blankform.png"
import uuid from "react-uuid";
import {useNavigate} from "react-router-dom"
function Template()
{
    const navigate=useNavigate();
    const createForm=()=>
    {
        console.log("clicked");
        const id=uuid();
        console.log(id);
        navigate("/form/"+id);

    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"16px", color:"#202124"}}>Start a new form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template Gallery
                        <UnfoldMoreIcon/>
                    </div>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>


            <div className="template_body">
                <div className="card" onClick={createForm} >
                    <img src={blankformimage} alt="noimage" className="card_image"></img>
                    <p className="card_title">Blank Form</p>
                </div>
                <div className="card">
                    <img src={partyimage} alt="noimage"className="card_image"></img>
                    <p className="card_title">Party Invite</p>
                </div>
                <div className="card">
                    <img src={contactinfoimage} alt="noimage"className="card_image"></img>
                    <p className="card_title">Contact Information</p>
                </div>
            </div>
        </div>
    )

}
export default Template
