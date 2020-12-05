import React, { Component } from "react";
import styles from "./ContactForm.style.js";
import { Button, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { validateNumberFld, validateEmailFld } from "../../../../utils/utils";
import ErrorIcon from "@material-ui/icons/Error";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class ContactForm extends Component {
  state = {
    name: this.props.userInfo?.name,
    email: this.props.userInfo?.email,
    phonenumber: "",
    country_code: "",
    text: "",
    numberError: false,
    emailError: false,
  };

  handleItemChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "email") {
      validateEmailFld(event.target.value)
        ? this.setState({ emailError: true })
        : this.setState({ emailError: false });
      event.target.value === "" && this.setState({ emailError: false });
    }

    if (event.target.name === "phonenumber") {
      validateNumberFld(event.target.value)
        ? this.setState({ numberError: true })
        : this.setState({ numberError: false });
    }
  };

  handleAutoCompleteChange = (event, newValue) => {
    this.setState({ country_code: newValue ? newValue.id : "" });
  };

  onSend = (event) => {
    event.preventDefault();
    let currState = { ...this.state };
    delete currState.emailError;
    delete currState.numberError;
    let jsonData = JSON.stringify(currState);

    if (!this.state.emailError && !this.state.numberError) {
      console.log(jsonData);
    }
  };

  componentWillReceiveProps = (nextProps, prevProps) => {
    this.setState((previousState) => {
      return {
        name: nextProps.userInfo?.name || "",
        email: nextProps.userInfo?.email || "",
      };
    });
  };

  render() {
    let { classes, t } = this.props;

    const country_list = [
      { id: "TR", name: t("Turkey") },
      { id: "US", name: t("United States of America") },
      { id: "GB", name: t("United Kingdom") },
      { id: "DE", name: t("Germany") },
      { id: "SE", name: t("Sweden") },
      { id: "KE", name: t("Kenya") },
      { id: "BR", name: t("Brazil") },
      { id: "ZW", name: t("Zimbabwe") },
    ];

    return (
      <form className={classes.form} name="contactus-form" autoComplete="on">
        <Input
          readOnly={Boolean(this.props.userInfo)}
          name="name"
          placeholder={t("Name")}
          onChange={this.handleItemChange}
          value={this.state.name}
        />
        <br />
        <Input
          readOnly={Boolean(this.props.userInfo)}
          type="email"
          placeholder={t("Email")}
          onChange={this.handleItemChange}
          name="email"
          value={this.state.email}
        />
        <br />
        <Input
          fullWidth={true}
          name="phonenumber"
          placeholder={t("Phone Number")}
          onChange={this.handleItemChange}
        />
        <Autocomplete
          name="country_code"
          options={country_list}
          className={classes.countryFld}
          getOptionLabel={(option) => option.name}
          onChange={this.handleAutoCompleteChange}
          renderInput={(params) => (
            <TextField {...params} label={t("Country")} />
          )}
        />
        <br />
        <Input
          className={classes.textareaFld}
          name="text"
          multiline={true}
          onChange={this.handleItemChange}
          rows={3}
          placeholder={t("Text")}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.onSend}
        >
          {t("Send")}
        </Button>
        <br />
        {this.state.numberError && (
          <span className={classes.errMsg}>
            <ErrorIcon />
            {t("Please enter a valid phone number")}
          </span>
        )}
        <br />
        {this.state.emailError && (
          <span className={classes.errMsg}>
            <ErrorIcon />
            {t("Please enter a valid email address")}
          </span>
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(
  withStyles(styles)(withTranslation("translations")(ContactForm))
);
