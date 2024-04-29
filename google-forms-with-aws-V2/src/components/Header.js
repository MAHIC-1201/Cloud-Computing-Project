import React from "react"
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import { Icon, IconButton } from "@material-ui/core"
import formimage from "../images/formsicon.png"
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../images/avatar.jpg"
import { Height } from "@material-ui/icons"
import TemporaryDrawer from "./TemporaryDrawer"
function Header()
{
    return(
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer/>
                <img className="form_image"src={formimage} alt="forms icon" style={{height: '40px' ,width: '40px'}} ></img>
                <div className="info"> Forms</div>
                

            </div>
            <div className="header_search">
                <IconButton><SearchIcon/></IconButton>
                <input type="text" name="search" placeholder="Search"></input>
            </div>
            <div className="header_right">
                <IconButton><AppsIcon/></IconButton>
                <IconButton><Avatar src={avatarimage} /></IconButton>
            </div>
        </div>
    )
}
export default Header