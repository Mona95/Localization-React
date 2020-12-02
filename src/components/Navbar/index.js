import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TranslateIcon from "@material-ui/icons/Translate";
import PersonIcon from "@material-ui/icons/Person";
import RedeemIcon from "@material-ui/icons/Redeem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./Navbar.style.js";

class Navbar extends Component {
  state = {
    locAnchorEl: null,
    userBtnAnchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget });
  };

  handleClose = (event) => {
    this.setState({ locAnchorEl: null, userBtnAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
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
              Scorp-Sample Case
            </Typography>

            <Typography>
              <Link href="#" color="inherit">
                Home
              </Link>
              <Link href="#" style={{ marginLeft: 30 }} color="inherit">
                Contact Us
              </Link>
            </Typography>

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
              onClick={this.handleClick}
              startIcon={<PersonIcon />}
            >
              User name
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.userBtnAnchorEl}
              keepMounted
              open={Boolean(this.state.userBtnAnchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>User Email</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(Navbar);
