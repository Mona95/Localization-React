import React from "react";
//styles
import useStyles from "./Home.style.js";
//Components
import Navbar from "../../../containers/Navbar";
//Translations
import { useTranslation } from "react-i18next";

export default function Home() {
  let classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className={classes.contentWrapper}>
        <span className={classes.title}>{t("Home Page")}</span>
        <p className={classes.articleP}>
          {t(
            "Excessive screen time can be harmful to our well-being, but we can free ourselves from tech’s hooks with goals, rules and boundaries. “There’s lots of great things to do online, but moderation is often the best rule for life, and it’s no different when it comes to screens,” said Jean Twenge, a psychology professor at San Diego State University and the author of “iGen,” a book about younger generations growing up in the smartphone era. Too much screen time can take a toll on our mental health, depriving us of sleep and more productive tasks, experts said."
          )}
        </p>
      </div>
    </>
  );
}
