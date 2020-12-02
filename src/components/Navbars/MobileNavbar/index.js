import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MobileNavbar(props) {
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);
  const mobileMenu = (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      name="mobileMoreAnchorEl"
      onClose={props.handleClose}
    >
      <MenuItem onClick={props.handleClose}>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return mobileMenu;
}
