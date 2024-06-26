import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tab: {
        fontSize: 12,
        color: "#5f6368",
        textTransform: "capitalize",
        height: 10,
        fontWeight: "600", // Corrected the typo from fontweight to fontWeight
        fontFamily: "Google sans, Roboto, Arial, sans-serif",
    },
    tabs: {
        height: 10
    }
});

function CenteredTabs() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Tabs 
                textColor="primary"
                indicatorColor="primary"
                centered
                className={classes.tabs}
            >
                <Tab label="Questions" className={classes.tab} />
                <Tab label="Responses" className={classes.tab} />
            </Tabs>
        </Paper>
    );
}

export default CenteredTabs;
