import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import styles from "./DesNavbar.style";
import LoginModal from "../../Modals/Login";
import LangSelector from "../../LangSelector";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class DesktopNavbar extends Component {
  render() {
    const { classes, t } = this.props;

    return (
      <>
        <Link to="" className={classes.linkStyle}>
          <Button name="Home" onClick={this.props.updateTitle} color="inherit">
            {t("Home")}
          </Button>
        </Link>
        <Link to="/contactus" className={classes.linkStyle}>
          <Button
            name="Contact Us"
            onClick={this.props.updateTitle}
            style={{ marginLeft: 30 }}
            color="inherit"
          >
            {t("Contact Us")}
          </Button>
        </Link>
        <LangSelector />
        {!this.props.userInfo && <LoginModal />}
        {this.props.userInfo && (
          <Button
            color="inherit"
            name="userBtnAnchorEl"
            style={{ marginLeft: 15 }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.props.handleClick}
            startIcon={<PersonIcon />}
          >
            {this.props.userInfo && this.props.userInfo.name}
          </Button>
        )}
        <Menu
          id="simple-menu"
          anchorEl={this.props.userBtnAnchorEl}
          keepMounted
          open={Boolean(this.props.userBtnAnchorEl)}
          onClose={this.props.handleClose}
        >
          <MenuItem onClick={this.props.handleClose}>
            {this.props.userInfo && this.props.userInfo.email}
          </MenuItem>
          <MenuItem onClick={this.props.handleLogout}>{t("Logout")}</MenuItem>
        </Menu>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(
  withStyles(styles)(withTranslation("translations")(DesktopNavbar))
);
