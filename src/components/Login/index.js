import React, { Component } from "react";
//Material-UI components
import Button from "@material-ui/core/Button";
//Components
import LoginModal from "../Modals/Login";
//Translations
import { withTranslation } from "react-i18next";

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
