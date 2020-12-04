import React, { Component } from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { updateLanguage } from "../../actions/actions";
import i18n from "../../i18n";

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
    let newLangCode = event.currentTarget.textContent.toLowerCase();
    this.props.updateLanguage(newLangCode);
    i18n.changeLanguage(newLangCode);
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
          {this.props.language}
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

const mapDispatchToProps = (dispatch) => ({
  updateLanguage: (newLangCode) => dispatch(updateLanguage(newLangCode)),
});

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);
