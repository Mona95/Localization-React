import React, { Component } from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class LangSelector extends Component {
  state = {
    locAnchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget });
  };

  handleClose = (event) => {
    this.setState({
      locAnchorEl: null,
    });
  };

  render() {
    return (
      <>
        <Button
          color="inherit"
          style={{ marginLeft: 15 }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          name="locAnchorEl"
          onClick={this.handleClick}
          startIcon={<TranslateIcon />}
        >
          EN
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.locAnchorEl}
          keepMounted
          open={Boolean(this.state.locAnchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>EN</MenuItem>
          <MenuItem onClick={this.handleClose}>TR</MenuItem>
        </Menu>
      </>
    );
  }
}

export default LangSelector;
