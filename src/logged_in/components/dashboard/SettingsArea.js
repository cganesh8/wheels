import React, { Fragment } from "react";
//import PropTypes from "prop-types";
import SettingsDisclaimer from "./SettingsDisclaimer";
import SettingsAdvice from "./SettingsAdvice";
import Settings1 from "./Settings1";
import Settings2 from "./Settings2";
import Settings3 from "./Settings3";
import Settings4 from "./Settings4";
import Settings5 from "./Settings5";
import SettingsPass from "./SettingsPass";

function SettingsArea(props) {
  const { pushMessageToSnackbar } = props;
  return (
    <Fragment>
      <SettingsDisclaimer pushMessageToSnackbar={pushMessageToSnackbar} />
      <SettingsAdvice pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings1 pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings2 pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings3 pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings4 pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings5 pushMessageToSnackbar={pushMessageToSnackbar} />
      <SettingsPass pushMessageToSnackbar={pushMessageToSnackbar} />
    </Fragment>
  );
}

//SettingsArea.propTypes = {
//  pushMessageToSnackbar: PropTypes.func
//};

export default SettingsArea;
