import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  IconButton
} from "@material-ui/core";
import ldpassImage from "../../dummy_data/images/TM2D_Collage_2x2.jpg";
import WaveBorder from "../../../shared/components/WaveBorder";

import { Link } from "react-router-dom";


const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  }
});

function HeadSection(props) {

  const {
    classes,
    theme,
    width,

    openRegisterDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,


  } = props;

  const menuItems = [

    {
      name: "Register",
      onClick: openRegisterDialog,
    },
  ];

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          We develop safe and confident drivers based on our structured driving lessons
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Since 2002, TM2D has guided over 9,000 learner drivers, both local
                            and from overseas to successfully attain a Victorian driving license.
                          </Typography>
                        </Box>

                        <div>
                          <Hidden mdUp>
                            <IconButton
                              className={classes.menuButton}
                              onClick={handleMobileDrawerOpen}
                              aria-label="Open Navigation"
                            >
                              {/*<MenuIcon color="primary" /> */}

                            </IconButton>
                          </Hidden>
                          <Hidden smDown>
                            {menuItems.map(element => {
                              if (element.link) {
                                return (
                                  <Link
                                    key={element.name}
                                    to={element.link}
                                    className={classes.noDecoration}
                                    onClick={handleMobileDrawerClose}
                                  >
                                    <Button
                                      color="secondary"
                                      size="large"
                                      classes={{ text: classes.menuButtonText }}
                                    >
                                      {element.name}
                                    </Button>
                                  </Link>
                                );
                              }
                              return (
                                <Button
                                  color="secondary"
                                  size="large"
                                  onClick={element.onClick}
                                  classes={{ text: classes.menuButtonText }}
                                  key={element.name}
                                >
                                  {element.name}
                                </Button>
                              );
                            })}
                          </Hidden>
                        </div>

                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <img
                        //src={headerImage}
                        src={ldpassImage}
                        className={classes.image}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}

        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
  openRegisterForm: PropTypes.func.isRequired,

  //classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  //openRegisterDialog: PropTypes.func.isRequired,
  //openRegisterForm: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(memo(HeadSection)));
