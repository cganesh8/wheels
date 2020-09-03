import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  //  Checkbox,
  Typography,
  //  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
//import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function LoginDialog(props) {
  const {
    setStatus,
    history,
    classes,
    onClose,
    openChangePasswordDialog,
    status,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  //const [mobile, setMobile] = React.useState('');
  //const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //const loginEmail = useRef();
  //const loginPassword = useRef();
  const loginMobilePhone = useRef();
  //const loginDriveTestDate = useRef();


  const login = useCallback(() => {

    //connect to server localhost:3000

    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mobile: loginMobilePhone.current.value,
      })
    })

      .then(response => response.json())
      .then(response => {
        setIsLoading(true);
        setStatus(null);

        if (response === "LoginNotOK") {
          setTimeout(() => {
            setStatus("invalidMobilePhone");
            setIsLoading(false);
          }, 1500);
        } else {
          //here response === "LoginOK"
          setTimeout(() => {
            history.push("/c/dashboard");
          }, 150);

        }
      })

  }, [setIsLoading, loginMobilePhone, history, setStatus]);


  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidMobilePhone"}
              required
              fullWidth
              label="Mobile Phone"
              inputRef={loginMobilePhone}
              autoFocus
              autoComplete="off"
              type="text"
              onChange={() => {
                if (status === "invalidMobilePhone") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidMobilePhone" &&
                "This mobile is not Registered"
              }
              FormHelperTextProps={{ error: true }}
            />

            {status === "verificationEmailSend" ? (
              {/*<HighlightedInformation>
                We have send instructions on how to reset your password to your
                email address
              </HighlightedInformation> */}
            ) : (
                <HighlightedInformation>
                  Mobile: <b>0412886730</b>
                </HighlightedInformation>
              )}

          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Login
              {isLoading && <ButtonCircularProgress />}
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >

            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
