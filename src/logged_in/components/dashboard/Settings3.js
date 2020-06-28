import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import { blue } from '@material-ui/core/colors';

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
    const [option8] = useState("None");
    const [option9] = useState("None");
    const [option10] = useState("None");
    const [option11] = useState("None");
    const [option12] = useState("None");
    const [option13] = useState("None");
    const [option14] = useState("None");
    const [option15] = useState("None");


    const inputs = [
        {
            state: option1,
            label: "Look at the rear/central mirror once about every 30-40 seconds during your drive test",
        },
        {
            state: option2,
            label: "Before applying the brake, look at the rear/central mirror first",
        },
        {
            state: option3,
            label: "Before indicating left, look at the rear/central mirror followed by the left external mirror",
        },
        {
            state: option4,
            label: "Before indicating right, look at the rear/central mirror followed by the right external mirror",
        },
        {
            state: option5,
            label: "Approach all intersections slowly, DON’T rush, look several times before turning into the main road",
        },
        {
            state: option6,
            label: "Take a little angle to the left or right when turning left or right appropriately",
        },
        {
            state: option7,
            label: "While turning DO NOT hit or rub against the side kerbs",
        },
        {
            state: option8,
            label: "The moment you finish a turn observe what speed applies on the new road",
        },
        {
            state: option9,
            label: "If you miss a street, just continue driving, you will be instructed to re-route",
        },
        {
            state: option10,
            label: "When driving in narrow streets where possible keep 1.5m away from parked vehicles",
        },
        {
            state: option11,
            label: "When stopping or slowing down behind a parked vehicle, when you are overtaking the parked vehicle or slow moving vehicle you look at mirrors first, indicate right and check your blind spot before overtaking",
        },
        {
            state: option12,
            label: "You will be required to either do a reverse parallel park or three point turn",
        },
        {
            state: option13,
            label: "Indicate left first before approaching the parked vehicle to commence parallel reverse park",
        },
        {
            state: option14,
            label: "Indicate left first to pull over the left before commencing the 3-point turn",
        },
        {
            state: option15,
            label: "At the end of State I, pull over to stop beside the kerb by indicating left first",
        },
    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: blue[900] }}>3</Avatar>
                </ListItemAvatar>

                <Typography>Stage 1 - 10 mins</Typography>
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