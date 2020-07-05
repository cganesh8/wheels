import React, { useState } from "react";
import PropTypes from "prop-types";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import Filter1Icon from '@material-ui/icons/Filter1';
import { pink, deepPurple } from '@material-ui/core/colors';

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

function Settings1(props) {
  const { classes } = props;

  const [option1] = useState("None");
  const [option2] = useState("None");
  const [option3] = useState("None");
  const [option4] = useState("None");
  const [option5] = useState("None");
  const [option6] = useState("None");


  const inputs = [
    {
      state: option1,
      label: "Is your driving license still valid or has it being suspended?",
      label1: "Ensure your driving license is valid and is not suspended by the police",
    },
    {
      state: option2,
      label: "If you have an Overseas driving license, when was it first issued?",
      label1: "In order to obtain a full Victorian driving license, your Overseas driving license must be valid for more than 3 years",
    },
    {
      state: option3,
      label: "Do you have any pre-existing medical condition e.g. diabetics or HBP that can affect your driving?",
      label1: "If you have any medical conditions, you would need to obtain a medical clearance letter from your GP",
    },
    {
      state: option4,
      label: " Are you still living in the same address?",
      label1: "If you don't have a Victorian leaner license, you must bring along a proof of address letter or document",
    },
    {
      state: option5,
      label: "You would be required to undertake and pass an eye chart test",
      label1: "If you use any visual aid devices eg. spectacles or contact lenses, please ensure you have them on.",
    },
    {
      state: option6,
      label: "If the logbook applies, ensure it is fully completed and consistently signed off",
      label1: "For those 21 years old & below, verify your log book or digital app with Vicroads several days before your drive test",
    },
  ];

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

        <ListItemAvatar>
          <Avatar style={{ color: pink[900] }}> <Filter1Icon /> </Avatar>
        </ListItemAvatar>

        <Typography>At the Vicroads Office, you will be asked the following:</Typography>
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
                  <Typography style={{ color: deepPurple[900] }} variant="body2">{element.label1}</Typography>
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

Settings1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings1));
