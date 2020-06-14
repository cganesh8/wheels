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
  const [testcenters, setTestCenter] = React.useState('');

  const testcenter = [
    {
      value: 'None',
      label: 'None',
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
  ];

  const handleChange = (event) => {
    setTestCenter(event.target.value);
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

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Register"
      onFormSubmit={(e) => {
        e.preventDefault();
        register();
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
                type="text"
                onChange={() => {
                  if (status === "null") {
                    setStatus(null);
                  }
                }}
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
                type="text"
                onChange={() => {
                  if (status === "null") {
                    setStatus(null);
                  }
                }}
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
                type="email"
                onChange={() => {
                  if (status === "invalidEmail") {
                    setStatus(null);
                  }
                }}
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
                type="text"
                onChange={() => {
                  if (status === "null") {
                    setStatus(null);
                  }
                }}
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
                type="text"
                onChange={() => {
                  if (status === "null") {
                    setStatus(null);
                  }
                }}
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
                type="date"
                onChange={() => {
                  if (status === "invalidDate") {
                    setStatus(null);
                  }
                }}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            {/*DriveTest Time */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                //required
                fullWidth
                error={status === "invalidEmail"}
                label="hh:mm"
                //autoFocus
                autoComplete="off"
                type="time"
                onChange={() => {
                  if (status === "invalidEmail") {
                    setStatus(null);
                  }
                }}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>

            {/*DriveTest Center

            <TextField
              id="outlined-select-currency-native"
              select
              label="Native select"
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="outlined"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            */}

            <Grid item xs={12} >

              <TextField
                id="test-center"
                select
                label="Vicroads Test Center"
                value={testcenters}
                onChange={handleChange}
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
