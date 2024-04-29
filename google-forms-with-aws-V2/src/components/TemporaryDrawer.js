import React from "react";
import MenuIcon from '@material-ui/icons/Menu'
import { Icon, IconButton, makeStyles } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import excelsheetsimage from "../images/sheetsimage.png"
import docsimage from "../images/docsicon.png"
import slidesimage from "../images/slidesimage.png"
import driveimage from "../images/driveimage.png"
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import settingsimafe from "../images/settingsimage.png"
import helpimage from "../images/helpimage.png"
import formsimage from "../images/formsicon.png"
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
import "./Drawer.css"
const useStyles=makeStyles({
    ListItem:{
        marginLeft:"20px", fontSize:"20px", fontWeight:"500", color:"black"
    },
    slideImages:{
        height:"30px",
        width:"30px"

    }
})
function TemporaryDrawer()
{
    const classes=useStyles();
    const [state,setState]=React.useState({
        left:false
    })
    const toggleDrawer =(anchor, open)=>(event)=>{
        setState({...state, [anchor]:open});
    }
    
    const list =(anchor)=>{
        return(<div style={{width:"250px"}} role="presentation">
            <Divider/>
            <List>
                <ListItem>
                    <ListItemText style={{fontSize: "48px", marginLeft:"5px"}}>
                        <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>G</span>
                        <span style={{color:"red", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>o</span>
                        <span style={{color:"yellow", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>o</span>
                        <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>g</span>
                        <span style={{color:"green", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>l</span>
                        <span style={{color:"red", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}>e</span>
                        <span style={{color:"#5f6368", fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans', Arial, sans-serif"}}> Docs</span>


                    </ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <List style={{marginLeft:"8px" , marginRight:"8px",marginTop:"15px"}}>
                <ListItem className="list_item">
                    <img src={docsimage} alt="google docs" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Docs</div>
                </ListItem>
                <ListItem className="list_item">
                    <img src={slidesimage} alt="google slides" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Slides</div>
                </ListItem>
                <ListItem className="list_item">
                    <img src={excelsheetsimage} alt="google sheets" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Sheets</div>
                </ListItem>
                <ListItem className="list_item">
                    <img src={formsimage} alt="google forms" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Forms</div>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className="list_item">
                    <img src={settingsimafe} alt="Settings iamge" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Settings</div>
                </ListItem>
                <ListItem className="list_item">
                    <img src={helpimage} alt="Help and Feedback" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Help and Feedback</div>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className="list_item">
                    <img src={driveimage} alt="Google Drive" className={classes.slideImages}></img>
                    <div className={classes.ListItem}>Google Drive</div>
                </ListItem>
            </List>


        </div>
        )
    }
    return (
        <React.Fragment>
            <div>
            <IconButton onClick={toggleDrawer("left", true)}><MenuIcon/></IconButton>
            <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={"left"}>
                {list('left')}
            </Drawer>
            </div>
        </React.Fragment>
    )
}
export default TemporaryDrawer