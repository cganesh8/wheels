import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function TermsOfServiceDialog(props) {
  const { classes, onClose, theme } = props;
  return (
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Terms and Conditions</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="secondary" paragraph>
          Teach Me 2 Drive or Teach Me 2 Drive Pty Ltd (TM2D) with
          ABN : 46100066966 will endeavour to engage an instructor
          according to your requirements for the drive lesson or
          the drive test.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Independent Instructors
        </Typography>
        <Typography paragraph>
          Hence TM2D will forward your personal data that you registered
          in TM2D website to TM2D pool of independent instructors who
          have their own ABN. The independent instructors operate their
          own drive school. As such, upon forwarding the information to
          the independent instructors, TM2D will discharge all its
          responsibilities as a drive school and the independent instructor
          will be responsible as to how he or she conducts the drive
          session with you.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Fee Payment
        </Typography>
        <Typography paragraph>
          You pay all monies directly to the independent instructor  however
          for convenience, occasionaly TM2D might collect monies from
          you and  pay the full amount to the allocated instructor. TM2D
          collects a referral fee from the allocated instructor upon successful
          completion of  your session.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Refund Policy
        </Typography>
        <Typography paragraph>
          All our prices remain as published in the TM2D website.
          Suppose you purchased a 5 x 1-hour package at a discounted price
          and decided to terminate before completion of the package,
          completed session will be calculated based on TM2D Standard Hourly
          Rate and the balance refunded within 7 working days.

          There will be no refund on lessons bundled or packaged with a drive test.
          The instructor nor TM2D cannot be held responsible for any of the

          following issues when appearing for a drive test AND no refund will be given:
          •	incorrect date & incorrect time bookings
          •	VicRoads booking issues or system errors
          •	invalid or not verified or expired driving licenses and related
          expired test results.
          •	lack of documents e.g. passport, proof of address, Medicare card,
          bank cards or logbooks
          •	incomplete or incorrect logbook entries

        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Cancellation
        </Typography>
        <Typography paragraph>
          The independent instructor requires 24 hours notice for any lesson
          cancellation and 48 hours notice for drive test cancellation, so
          that he or she can arrange a replacement session, otherwise the
          full fee applies.

          By commencing the first session with the instructor we consider
          that you agree to these terms and conditions.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Marketing & Promotion
        </Typography>
        <Typography paragraph>
          Upon successful completion of a drive test, the independent instructor
          will take photo of you for marketing and promotional purposes. You can
          refuse not to have a photo taken.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Back
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

TermsOfServiceDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TermsOfServiceDialog);
