import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import Filter3Icon from '@material-ui/icons/Filter3';
import { pink } from '@material-ui/core/colors';

import {
    List,
    ListItem,
    ListItemSecondaryAction,
    //Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ListItemText,
    //OutlinedInput,
    ExpansionPanelDetails,
    //MenuItem,
    FormControl,
    //Select,
    //Box,
    withStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import WorkIcon from "@material-ui/icons/Work";
import withWidth from "@material-ui/core/withWidth";
import Bordered from "../../../shared/components/Bordered";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    numberInput: {
        width: 110,
    },
    numberInputInput: {
        padding: "9px 34px 9px 14.5px",
    },
    dBlock: { display: "block" },
    listItemLeftPadding: {
        paddingRight: theme.spacing(3),
    },
    expansionPanelDetails: {
        paddintTop: theme.spacing(0),
        justifyContent: "flex-end",
    },
});

function Settings3(props) {
    const { classes } = props;
    //const [isSaveLoading, setIsSaveLoading] = useState(false);
    //const [isDefaultLoading, setIsDefaultLoading] = useState(false);
    const [option1] = useState("None");
    const [option2] = useState("None");
    const [option3] = useState("None");
    const [option4] = useState("None");
    const [option5] = useState("None");
    const [option6] = useState("None");
    const [option7] = useState("None");


    const inputs = [
        {
            state: option1,
            label: "Know the difference between advisory speed and regularity speed signs.",
        },
        {
            state: option2,
            label: "Throughout your drive test, keep below at least 5km/h from maximum speed",
        },
        {
            state: option3,
            label: "If your drive test is within school times on school days, school speed limits strictly applies in all school zones",
        },
        {
            state: option4,
            label: "There are also permanent 40km/h speed zones, drive at about 35km/h in these zones.",
        },
        {
            state: option5,
            label: "Where there are road works, speed is generally 40km/h if displayed, drive at about 35km/h in these areas. ",
        },
        {
            state: option6,
            label: "Approach all intersections slowly, DO NOT rush, look several times before turning into the main road",
        },
        {
            state: option7,
            label: "When turning left or right, maintain an average speed of about 20km/h",
        },
    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: pink[900] }}> <Filter3Icon /> </Avatar>
                </ListItemAvatar>

                <Typography>Managing Speed</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.dBlock}>
                <List disablePadding>
                    <Bordered disableVerticalPadding disableBorderRadius>
                        {inputs.map((element, index) => (
                            <ListItem
                                className="listItemLeftPadding"
                                disableGutters
                                divider
                                key={index}
                            >
                                <ListItemText>
                                    <Typography variant="body2">{element.label}</Typography>
                                </ListItemText>
                                <FormControl variant="outlined">
                                    <ListItemSecondaryAction
                                        className={classes.ListItemSecondaryAction}
                                    >

                                    </ListItemSecondaryAction>
                                </FormControl>
                            </ListItem>
                        ))}

                    </Bordered>
                </List>
            </ExpansionPanelDetails>

        </ExpansionPanel>
    );
}

Settings3.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings3));