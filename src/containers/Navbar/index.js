import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Navbar.style.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import RedeemIcon from "@material-ui/icons/Redeem";
import MoreIcon from "@material-ui/icons/MoreVert";
import MobileNavbar from "../../components/Navbars/MobileNavbar";
import DesktopNavbar from "../../components/Navbars/DesktopNavbar";

class Navbar extends Component {
  state = {
    userBtnAnchorEl: null,
    mobileMoreAnchorEl: null,
    isMobileMenuOpen: false,
  };

  handleClick = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget });
  };

  handleClose = (event) => {
    this.setState({
      userBtnAnchorEl: null,
      mobileMoreAnchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const mobileMenuId = "mobile-menu";
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <RedeemIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              Scorp-Sample Case
            </Typography>

            <div className={classes.sectionDesktop}>
              <DesktopNavbar
                handleClick={this.handleClick}
                handleClose={this.handleClose}
                userBtnAnchorEl={this.state.userBtnAnchorEl}
              />
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                name="mobileMoreAnchorEl"
                onClick={this.handleClick}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <MobileNavbar
          mobileMenuId={mobileMenuId}
          mobileMoreAnchorEl={this.state.mobileMoreAnchorEl}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default withStyles(styles)(Navbar);
