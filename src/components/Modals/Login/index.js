import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import styles from "./LoginModal.style";
import { validateEmailFld, validateEmptyField } from "../../../utils/utils";
import LangSelector from "../../LangSelector";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../actions/actions";
import { withTranslation } from "react-i18next";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: null,
    modalOpen: false,
    emailError: false,
    emptyFldError: false,
  };
  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalClose = () => {
    if (!this.state.emailError) {
    }
    if (this.state.name === "") {
      this.setState({ emptyFldError: true });
    } else {
      this.setState({ modalOpen: false });
      let userInfoData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      this.props.updateUserInfo(userInfoData);
    }
  };

  handleItemChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "email") {
      validateEmailFld(event.target.value)
        ? this.setState({ emailError: true })
        : this.setState({ emailError: false });
    }
    if (event.target.name === "name") {
      validateEmptyField(event.target.value)
        ? this.setState({ emptyFldError: true })
        : this.setState({ emptyFldError: false });
    }
  };

  modalClose = () =>
    this.setState({
      modalOpen: false,
      emailError: false,
      emptyFldError: false,
    });

  render() {
    let { classes, t } = this.props;

    return (
      <>
        <Button
          size="small"
          color="inherit"
          style={{ marginLeft: 15 }}
          variant="outlined"
          onClick={this.handleModalOpen}
        >
          {t("Login")}
        </Button>
        <Dialog
          className={classes.modalBody}
          open={this.state.modalOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {t("Login")}
            <div className={classes.langSelector}>
              <LangSelector />
            </div>
          </DialogTitle>
          <DialogContent>
            <Input
              name="name"
              placeholder={t("Name")}
              onChange={this.handleItemChange}
            />
            <br />
            <Input
              name="email"
              placeholder={t("Email")}
              onChange={this.handleItemChange}
            />
            <br />
            <Input
              name="password"
              type="password"
              placeholder={t("Password")}
              onChange={this.handleItemChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleModalClose} color="primary">
              {t("Login")}
            </Button>
            <Button onClick={this.modalClose} color="primary">
              {t("Close")}
            </Button>
          </DialogActions>
          {this.state.emailError && (
            <span className={classes.errMsg}>
              {t(" Please enter a valid email address")}
            </span>
          )}
          {this.state.emptyFldError && (
            <span className={classes.errMsg}>
              {t("Name field can not be empty")}
            </span>
          )}
        </Dialog>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo)),
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(withTranslation("translations")(Login)));
