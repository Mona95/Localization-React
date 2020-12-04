import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../../../containers/Navbar";
import { withTranslation } from "react-i18next";
import styles from "./Home.style.js";

class Home extends Component {
  render() {
    let { classes } = this.props;
    const { t } = this.props;
    return (
      <>
        <Navbar />
        <div className={classes.contentWrapper}>
          <span className={classes.title}>{t("Home Page")}</span>
          <p className={classes.articleP}>
            {t(
              "Excessive screen time can be harmful to our well-being, but we can free ourselves from tech’s hooks with goals, rules and boundaries. “There’s lots of great things to do online, but moderation is often the best rule for life, and it’s no different when it comes to screens,” said Jean Twenge, a psychology professor at San Diego State University and the author of “iGen,” a book about younger generations growing up in the smartphone era. Too much screen time can take a toll on our mental health, depriving us of sleep and more productive tasks, experts said. I, for one, am experiencing this. Before the pandemic, my average daily screen time on my phone was three and a half hours. Over the last eight months, that has nearly doubled."
            )}
          </p>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withTranslation("translations")(Home));
