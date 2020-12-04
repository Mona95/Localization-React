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
import { connect } from "react-redux";
import { updateUserInfo, updatePageTitle } from "../../actions/actions";
import { withTranslation } from "react-i18next";

class Navbar extends Component {
  state = {
    userBtnAnchorEl: null,
    mobileMoreAnchorEl: null,
    isMobileMenuOpen: false,
  };

  handleClick = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget });
  };

  handleClose = () => {
    this.setState({
      userBtnAnchorEl: null,
      mobileMoreAnchorEl: null,
    });
  };

  handleLogout = () => {
    this.props.updateUserInfo(null);
    this.handleClose();
  };

  updateTitle = (event) => {
    let newTitle = event.currentTarget.name || event.currentTarget.title;
    newTitle === "Home" && (newTitle = "Scorp-Sample Case");
    this.props.updatePageTitle(newTitle);
    this.handleClose();
  };

  render() {
    const { classes, t } = this.props;
    const mobileMenuId = "mobile-menu";

    const titles = {
      "Scorp-Sample Case": t("Scorp-Sample Case"),
      "Contact Us": t("Contact Us"),
    };

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
              {titles[this.props.pageTitle]}
            </Typography>

            <div className={classes.sectionDesktop}>
              <DesktopNavbar
                handleClick={this.handleClick}
                handleClose={this.handleClose}
                handleLogout={this.handleLogout}
                userBtnAnchorEl={this.state.userBtnAnchorEl}
                updateTitle={this.updateTitle}
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
          handleLogout={this.handleLogout}
          updateTitle={this.updateTitle}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo)),
  updatePageTitle: (title) => dispatch(updatePageTitle(title)),
});

const mapStateToProps = (state) => ({
  pageTitle: state.pageTitle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTranslation("translations")(Navbar)));
