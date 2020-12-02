import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";
import { Link } from "react-router-dom";
import styles from "./MobNavbar.style";

class MobileNavbar extends Component {
  render() {
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(this.props.mobileMoreAnchorEl);
    const mobileMenu = (
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
          <MenuItem onClick={this.props.handleClose}>HOME</MenuItem>
        </Link>

        <Link to="/contactus" className={classes.linkStyle}>
          <MenuItem onClick={this.props.handleClose}>CONTACT US</MenuItem>
        </Link>

        <NestedMenuItem
          label="EN"
          parentMenuOpen={!!isMobileMenuOpen}
          onClick={this.handleItemClick}
        >
          <MenuItem>EN</MenuItem>
          <MenuItem>TR</MenuItem>
        </NestedMenuItem>
        <MenuItem>
          <p>LOGIN</p>
        </MenuItem>
        <NestedMenuItem label="User name" parentMenuOpen={!!isMobileMenuOpen}>
          <MenuItem>user email</MenuItem>
          <MenuItem>Log out</MenuItem>
        </NestedMenuItem>
      </Menu>
    );

    return mobileMenu;
  }
}

export default withStyles(styles)(MobileNavbar);
