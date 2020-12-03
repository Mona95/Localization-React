import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";
import { Link } from "react-router-dom";
import styles from "./MobNavbar.style";
import { connect } from "react-redux";

class MobileNavbar extends Component {
  render() {
    const { classes } = this.props;
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
            <MenuItem onClick={this.props.updateTitle}>HOME</MenuItem>
          </Link>

          <Link to="/contactus" className={classes.linkStyle}>
            <MenuItem onClick={this.props.updateTitle}>CONTACT US</MenuItem>
          </Link>

          <NestedMenuItem
            label="EN"
            parentMenuOpen={!!isMobileMenuOpen}
            onClick={this.handleItemClick}
          >
            <MenuItem>EN</MenuItem>
            <MenuItem>TR</MenuItem>
          </NestedMenuItem>
          {this.props.userInfo && (
            <NestedMenuItem
              label={this.props.userInfo && this.props.userInfo.name}
              parentMenuOpen={!!isMobileMenuOpen}
            >
              <MenuItem>
                {this.props.userInfo && this.props.userInfo.email}
              </MenuItem>
              <MenuItem onClick={this.props.handleLogout}>Log out</MenuItem>
            </NestedMenuItem>
          )}
        </Menu>
      </>
    );

    return mobileMenu;
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(withStyles(styles)(MobileNavbar));
