import React, { Component } from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class DesktopNavbar extends Component {
  render() {
    return (
      <>
        <Button href="#" color="inherit">
          Home
        </Button>
        <Button href="#" style={{ marginLeft: 30 }} color="inherit">
          Contact Us
        </Button>
        <Button
          color="inherit"
          style={{ marginLeft: 15 }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          name="locAnchorEl"
          onClick={this.props.handleClick}
          startIcon={<TranslateIcon />}
        >
          EN
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.props.locAnchorEl}
          keepMounted
          open={Boolean(this.props.locAnchorEl)}
          onClose={this.props.handleClose}
        >
          <MenuItem onClick={this.props.handleClose}>EN</MenuItem>
          <MenuItem onClick={this.props.handleClose}>TR</MenuItem>
        </Menu>
        <Button
          size="small"
          color="inherit"
          style={{ marginLeft: 15 }}
          variant="outlined"
        >
          LOGIN
        </Button>
        <Button
          color="inherit"
          name="userBtnAnchorEl"
          style={{ marginLeft: 15 }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.props.handleClick}
          startIcon={<PersonIcon />}
        >
          User name
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.props.userBtnAnchorEl}
          keepMounted
          open={Boolean(this.props.userBtnAnchorEl)}
          onClose={this.props.handleClose}
        >
          <MenuItem onClick={this.props.handleClose}>user email</MenuItem>
          <MenuItem onClick={this.props.handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
}

export default DesktopNavbar;
