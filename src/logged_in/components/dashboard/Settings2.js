import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import Filter2Icon from '@material-ui/icons/Filter2';
import { red, deepPurple } from '@material-ui/core/colors';

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

function Settings2(props) {
    const { classes } = props;

    const [option1] = useState("None");

    const inputs = [
        {
            state: option1,
            label: "Before the tester arrives, be seated in the car with your seatbelts fastened and keep the car on accessory mode",
            label1: "•  Select the turn signal stalk to Indicate left then right, turn on the lights with low beam, then high beam followed by  the hazard lights",
            label2: "•  Apply the brake to indicate all the rear red lights are working",
            label3: "•  Demonstrate the use of wipers and washers",
            label4: "•  Show where the front and rear demisters are located including the hand brake",
            label5: "•  When everyone is safely seated, make sure you start the car before engaging gear or releasing the hand brake",
            label6: "•  Engage the appropriate gear, release the handbrake and drive at the speed allowed in the car park",
        },
    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: red[900] }}> <Filter2Icon /> </Avatar>
                </ListItemAvatar>

                <Typography>Pre-Drive Check at the Vicroads Car Park</Typography>
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
                                    <Typography variant="body1" >{element.label}</Typography>

                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label1}</Typography>
                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label2}</Typography>
                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label3}</Typography>
                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label4}</Typography>
                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label5}</Typography>
                                    <Typography style={{ color: deepPurple[900] }} variant="body2" >{element.label6}</Typography>
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

Settings2.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings2));