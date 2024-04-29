import React from "react";
import StorageIcon from "@material-ui/icons/Storage"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import doc_image from "../images/docimage.png"
import "./Mainbody.css"
function Mainbody()
{
    return (
        <div className="main_body">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:"16px", fontWeight:"500"}}>
                    Recent Forms
                </div>
                <div className="mainbody_top_right">
                    <div className="mainbody_top_center" style={{fontsize:"14px", marginRight:"125px"}}>
                        Owned by anyone
                        <ArrowDropDownIcon/>
                    </div>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px", color:"black"}}></StorageIcon>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px", color:"black", marginRight:"130px"}}></FolderOpenIcon>
                    </IconButton>
                </div>
            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                    <img src={doc_image} className="doc_image" ></img>
                    <div className="doc_card_content">
                        <h5></h5>
                        <div className="doc_content" style={{fontsize:"12px", color:"grey"}}>
                            <div className="content_left">
                                <StorageIcon style={{color:"white", fontsize:"12px", backgroundColor:"#632594", padding:"2px", marginRight:"3px", borderRadius:"2px"}}> Opened on 4th April</StorageIcon>
                            </div>
                            <MoreVertIcon style={{fontsize:"16px", color:"grey"}}/>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Mainbody