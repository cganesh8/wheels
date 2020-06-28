import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import { cyan } from '@material-ui/core/colors';

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

function Settings4(props) {
    const { classes } = props;
    //const [isSaveLoading, setIsSaveLoading] = useState(false);
    //const [isDefaultLoading, setIsDefaultLoading] = useState(false);
    const [option1] = useState("None");
    const [option2] = useState("None");
    const [option3] = useState("None");
    const [option4] = useState("None");
    const [option5] = useState("None");
    const [option6] = useState("None");



    const inputs = [
        {
            state: option1,
            label: "Before the tester arrives, plug in your seat belt and keep the car on accessory mode",
            stateName: "option1",
        },
        {
            state: option2,
            label: "Indicate left then right, turn on the low beam then high beam and then the hazard lights ",
            stateName: "option2",
        },
        {
            state: option3,
            label: "Apply the brake so that all the rear red lights are working",
            stateName: "option3",
        },
        {
            state: option4,
            label: "Demonstrate the use of wipers and washers",
            stateName: "option4",
        },
        {
            state: option5,
            label: "Show where the front and rear demisters are including the hand brake",
            stateName: "option5",
        },
        {
            state: option6,
            label: "When everyone is seated, make sure you start the car before engaging gear or releasing the hand brake",
            stateName: "option6",
        },
        {
            state: option6,
            label: "if the logbook applies, ensure it is fully completed and consistently signed off",
            stateName: "option5",
        },
    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: cyan[900] }}>2</Avatar>
                </ListItemAvatar>

                <Typography>Stage 2 - 20 mins</Typography>
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

Settings4.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings4));