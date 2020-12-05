import React, { Component } from "react";
//styles
import { withStyles } from "@material-ui/core/styles";
import styles from "./MobNavbar.style";
//Material-UI components
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";
//React router components
import { Link } from "react-router-dom";
//redux and actions
import { connect } from "react-redux";
import { updateLanguage } from "../../../actions/actions";
//Components
import LoginModal from "../../Modals/Login";
//Translations
import { withTranslation } from "react-i18next";
import i18n from "../../../i18n";

class MobileNavbar extends Component {
  state = {
    isModalOpen: false,
  };

  handleModalOpen = () => this.setState({ isModalOpen: true });

  handleModalClose = () => this.setState({ isModalOpen: false });

  //handling language update(and state.language) based on user selection
  handleLanguageUpdate = (event) => {
    let newLangCode = event.currentTarget.textContent.toLowerCase();
    this.props.updateLanguage(newLangCode);
    i18n.changeLanguage(newLangCode);
  };

  render() {
    const { classes, t } = this.props;
    const isMobileMenuOpen = Boolean(this.props.mobileMoreAnchorEl);
    const mobileMenu = (
      <>
        <Menu
          anchorEl={this.props.mobileMoreAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={this.props.mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMobileMenuOpen}
          name="mobileMoreAnchorEl"
          onClose={this.props.handleClose}
        >
          <Link to="" className={classes.linkStyle}>
            <MenuItem title="Home" onClick={this.props.updateTitle}>
              {t("Home")}
            </MenuItem>
          </Link>

          <Link to="/contactus" className={classes.linkStyle}>
            <MenuItem title="Contact Us" onClick={this.props.updateTitle}>
              {t("Contact Us")}
            </MenuItem>
          </Link>

          <NestedMenuItem
            label={this.props.language.toUpperCase()}
            parentMenuOpen={!!isMobileMenuOpen}
            onClick={this.handleItemClick}
          >
            <MenuItem onClick={this.handleLanguageUpdate}>EN</MenuItem>
            <MenuItem onClick={this.handleLanguageUpdate}>TR</MenuItem>
          </NestedMenuItem>
          {!this.props.userInfo && (
            <MenuItem onClick={this.handleModalOpen}>{t("Login")}</MenuItem>
          )}
          {this.props.userInfo && (
            <NestedMenuItem
              label={this.props.userInfo && this.props.userInfo.name}
              parentMenuOpen={!!isMobileMenuOpen}
            >
              <MenuItem>
                {this.props.userInfo && this.props.userInfo.email}
              </MenuItem>
              <MenuItem onClick={this.props.handleLogout}>
                {t("Logout")}
              </MenuItem>
            </NestedMenuItem>
          )}
        </Menu>
        <LoginModal
          isModalOpen={this.state.isModalOpen}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
        />
      </>
    );

    return mobileMenu;
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateLanguage: (newLangCode) => dispatch(updateLanguage(newLangCode)),
});

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  language: state.language,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTranslation("translations")(MobileNavbar)));
