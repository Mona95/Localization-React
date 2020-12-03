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
import { updatePageTitle } from "../../../actions/actions";

class DesktopNavbar extends Component {
  handleLinkClick = (event) => {
    this.props.updatePageTitle(event.currentTarget.name);
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Link to="" className={classes.linkStyle}>
          <Button
            name="Scorp-Sample Case"
            onClick={this.handleLinkClick}
            color="inherit"
          >
            Home
          </Button>
        </Link>
        <Link to="/contactus" className={classes.linkStyle}>
          <Button
            name="Contact Us"
            onClick={this.handleLinkClick}
            style={{ marginLeft: 30 }}
            color="inherit"
          >
            Contact Us
          </Button>
        </Link>
        <LangSelector />
        <LoginModal />
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

const mapDispatchToProps = (dispatch) => ({
  updatePageTitle: (title) => dispatch(updatePageTitle(title)),
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(DesktopNavbar));
