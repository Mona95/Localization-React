import React, { Component } from "react";
import styles from "./ContactForm.style.js";
import { Button, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phonenumber: "",
    country_code: "",
    text: "",
  };

  handleItemChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSend = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    let { classes } = this.props;
    return (
      <form className={classes.form} name="contactus-form" autoComplete="on">
        <Input
          name="name"
          placeholder="Name"
          onChange={this.handleItemChange}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={this.handleItemChange}
          name="email"
        />
        <br />
        <Input
          name="phonenumber"
          placeholder="Phone Number"
          onChange={this.handleItemChange}
          type="number"
        />
        <Input
          name="country_code"
          type="search"
          onChange={this.handleItemChange}
          placeholder="Country"
        />
        <br />
        <Input
          style={{ width: "41%" }}
          name="text"
          multiline={true}
          onChange={this.handleItemChange}
          rows={3}
          placeholder="Description"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.onSend}
        >
          SEND
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ContactForm);
