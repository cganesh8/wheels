import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import Filter5Icon from '@material-ui/icons/Filter5';
import { yellow } from '@material-ui/core/colors';

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

function Settings5(props) {
    const { classes } = props;
    //const [isSaveLoading, setIsSaveLoading] = useState(false);
    //const [isDefaultLoading, setIsDefaultLoading] = useState(false);
    const [option1] = useState("None");
    const [option2] = useState("None");
    const [option3] = useState("None");
    const [option4] = useState("None");
    const [option5] = useState("None");

    const inputs = [
        {
            state: option1,
            label: "When approaching a STOP sign intersection , stop completely just before the STOP LINE for 3 seconds ",
            stateName: "option1",
        },
        {
            state: option2,
            label: "Before entering the Median Strip, observe all sides and when safe drive into the Median Strip",
            stateName: "option2",
        },
        {
            state: option3,
            label: "Be vigilant at Traffic Lights intersections especially when turning right with or without the green arrow light",
            stateName: "option3",
        },
        {
            state: option4,
            label: "When changing lanes or moving more than a meter to the left or right, ensure you look into the appropriate blind spot before changing lanes",
            stateName: "option4",
        },
        {
            state: option5,
            label: "When approaching roundbouts, lookout for vehicles IN the round about or vehicles approaching close to you from the right",
            stateName: "option5",
        },

    ];

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                <ListItemAvatar>
                    <Avatar style={{ color: yellow[900] }}> <Filter5Icon /></Avatar>
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

Settings5.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings5));