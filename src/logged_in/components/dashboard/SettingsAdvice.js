import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import { green } from '@material-ui/core/colors';

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
import withWidth from "@material-ui/core/withWidth";
import Bordered from "../../../shared/components/Bordered";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
//import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";



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

function SettingsAdvice(props) {
    const { classes } = props;

    const [option1] = useState("None");
    const [option2] = useState("None");
    const [option3] = useState("None");
    const [option4] = useState("None");


    const inputs = [
        {
            state: option1,
            label: "You need to bring along all your local driving license (LDL) and overseas driving licenses (ODL) if applicable. ODLs must be verified with Vicroads",
            label1: "",
            label2: "",
            label3: "",
            label4: "",
        },
        {
            state: option2,
            label: "If you have an ODL, Please bring the following documents:",
            label1: "1.	Passport",
            label2: "2.	Proof of address",
            label3: "3.	Medicare card, and",
            label4: "4.	Bank card as secondary proof of residence",
        },
        {
            state: option3,
            label: "If you are below 21 years old and have a log book, ensure that the log book is fully completed including signatures on List of Supervisors Page and Declaration Page. For digital log books, please check with Vicroads.",
            label1: "",
            label2: "",
            label3: "",
            label4: "",
        },
        {
            state: option4,
            label: "Your Learner’s License and Hazard Perception Test results must be valid and not expired",
            label1: "",
            label2: "",
            label3: "",
            label4: "",
        },
    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: green[500] }}> <AssignmentIcon /> </Avatar>
                </ListItemAvatar>

                <Typography>Required Documentation</Typography>
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
                                    <Typography variant="body1">{element.label}</Typography>
                                    <Typography variant="body2">{element.label1}</Typography>
                                    <Typography variant="body2">{element.label2}</Typography>
                                    <Typography variant="body2">{element.label3}</Typography>
                                    <Typography variant="body2">{element.label4}</Typography>
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

SettingsAdvice.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(SettingsAdvice));