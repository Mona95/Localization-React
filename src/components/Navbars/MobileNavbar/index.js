import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";

class MobileNavbar extends Component {
  render() {
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
        <MenuItem onClick={this.props.handleClose}>
          <p>HOME</p>
        </MenuItem>
        <MenuItem onClick={this.props.handleClose}>
          <p>CONTACT US</p>
        </MenuItem>
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

export default MobileNavbar;
