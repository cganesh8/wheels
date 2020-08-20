import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
//import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
});

function RegisterDialog(props) {
  const { setStatus, theme, onClose, openTermsDialog, status, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  //const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();

  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [suburb, setSuburb] = React.useState('');
  const [postcode, setPostCode] = React.useState('');
  const [drivetestdate, setDriveTestDate] = React.useState('');
  const [drivetesttime, setDriveTestTime] = React.useState('');
  const [drivetestcenter, setDriveTestCenter] = React.useState('');

  const testcenter = [
    {
      value: 'None',
      label: 'None',
    },
    {
      value: 'Broadmeadows',
      label: 'Broadmeadows',
    },
    {
      value: 'Bundoora',
      label: 'Bundoora',
    },
    {
      value: 'Burwood',
      label: 'Burwood',
    },
    {
      value: 'Carlton',
      label: 'Carlton',
    },
    {
      value: 'Dandenong',
      label: 'Dandenong',
    },
    {
      value: 'Heatherton',
      label: 'Heatherton',
    },
    {
      value: 'Mooroolbark',
      label: 'Mooroolbark',
    },
    {
      value: 'Pakenham',
      label: 'Pakenham',
    },
    {
      value: 'Werribee',
      label: 'Werribee',
    },
  ];

  const handleNameChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setName(event.target.value);

  };

  const handleMobileChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setEmail(event.target.value);
  };

  const handleSuburbChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setSuburb(event.target.value);
  };

  const handlePostCodeChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setPostCode(event.target.value);
  };

  const handleDriveTestDateChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setDriveTestDate(event.target.value);
  };

  const handleDriveTestTimeChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setDriveTestTime(event.target.value);
  };

  const handleDriveTestCenterChange = (event) => {

    if (status === "null") {
      setStatus(null);
    }
    setDriveTestCenter(event.target.value);
  };

  const register = useCallback(() => {
    if (!registerTermsCheckbox.current.checked) {
      setHasTermsOfServiceError(true);

      return;
    }

    setStatus(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [
    setIsLoading,
    setStatus,
    setHasTermsOfServiceError,
    registerTermsCheckbox,
  ]);

  //const checkconnection = () => {
  //  fetch('http://localhost:3000/')
  //  .then(response => response.json())
  //  .then(console.log)
  //}

  const registerLearner = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        mobile: mobile,
        email: email,
        enrolled: new Date(),
        suburb: suburb,
        postcode: postcode,
        dtdate: drivetestdate,
        dttime: drivetesttime,
        dtcenter: drivetestcenter,
        source: 'TM2D'
      })
    })
  }

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Register"
      onFormSubmit={(e) => {
        e.preventDefault();
        register();
        registerLearner();
      }}
      hideBackdrop
      hasCloseIcon
      content={
        <Fragment>

          {/*Name */}
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === "null"}
                label="Name"
                autoFocus
                autoComplete="off"
                type="text" value={name}
                onChange={handleNameChange}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
            <Grid item xs={12} >
              {/*Mobile */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === "null"}
                label="Mobile"
                autoComplete="off"
                type="text" value={mobile}
                onChange={handleMobileChange}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            {/*Email */}
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === "invalidEmail"}
                label="abc@gmail.com"
                //autoFocus
                autoComplete="off"
                type="email" value={email}
                onChange={handleEmailChange}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            {/*Suburb */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === "null"}
                label="Suburb"
                autoComplete="off"
                type="text" value={suburb}
                onChange={handleSuburbChange}

                FormHelperTextProps={{ error: true }}
              />
            </Grid>
            {/*Post code */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === "null"}
                label="Post Code"
                autoComplete="off"
                type="text" value={postcode}
                onChange={handlePostCodeChange}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            <HighlightedInformation>
              Enter details below if your Drive Test is pre-booked.
            </HighlightedInformation>

            {/*DriveTest Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                //required
                fullWidth
                error={status === "invalidDate"}
                label=""
                //autoFocus
                autoComplete="off"
                type="date" value={drivetestdate}
                onChange={handleDriveTestDateChange}
                FormHelperTextProps={{ error: true }
                }
              />
            </Grid>

            {/*DriveTest Time */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                //required
                fullWidth
                error={status === "invalidTime"}
                label="hh:mm"
                //autoFocus
                autoComplete="off"
                type="time" value={drivetesttime}
                onChange={handleDriveTestTimeChange}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            <Grid item xs={12} >

              <TextField
                id="test-center"
                select
                label="Vicroads Test Center"
                value={drivetestcenter}
                onChange={handleDriveTestCenterChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select Vicroads Test Center"
                variant="outlined"
              >
                {testcenter.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

            </Grid>

            <FormControlLabel
              style={{ marginRight: 0 }}
              control={
                <Checkbox
                  color="primary"
                  inputRef={registerTermsCheckbox}
                  onChange={() => {
                    setHasTermsOfServiceError(false);
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  I agree to the
                <span
                    className={classes.link}
                    onClick={isLoading ? null : openTermsDialog}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(event) => {
                      // For screenreaders listen to space and enter events
                      if (
                        (!isLoading && event.keyCode === 13) ||
                        event.keyCode === 32
                      ) {
                        openTermsDialog();
                      }
                    }}
                  >
                    {" "}
                  terms of service
                </span>
                </Typography>
              }
            />
            {hasTermsOfServiceError && (
              <FormHelperText
                error
                style={{
                  display: "block",
                  marginTop: theme.spacing(-1),
                }}
              >
                In order to register, you have to accept our terms of
                service.
              </FormHelperText>
            )}
            {status === "accountCreated" ? (
              <HighlightedInformation>
                We have created your account. Please click on the link in the
                email we have sent to you before logging in.
              </HighlightedInformation>
            ) : (
                <HighlightedInformation>
                  Registration is disabled until we go live.
                </HighlightedInformation>
              )}
          </Grid>
        </Fragment>
      }
      actions={
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          color="secondary"
          disabled={isLoading}
        >
          Register
          {isLoading && <ButtonCircularProgress />}
        </Button>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);