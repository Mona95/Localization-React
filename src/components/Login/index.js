import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "react-i18next";
import LoginModal from "../Modals/Login";

class Login extends Component {
  state = {
    isModalOpen: false,
  };

  handleModalOpen = () => this.setState({ isModalOpen: true });

  handleModalClose = () => this.setState({ isModalOpen: false });

  render() {
    let { t } = this.props;

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
        <LoginModal
          isModalOpen={this.state.isModalOpen}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
        />
      </>
    );
  }
}

export default withTranslation("translations")(Login);
