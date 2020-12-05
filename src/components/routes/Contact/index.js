import React from "react";
//styles
import useStyles from "./Contact.style.js";
//Components
import Navbar from "../../../containers/Navbar";
import ContactForm from "./ContactForm";
//Translations
import { useTranslation } from "react-i18next";

export default function Contact() {
  let classes = useStyles();
  let { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className={classes.contentWrapper}>
        <span className={classes.title}>{t("Contact Us")}</span>
        <ContactForm />
      </div>
    </div>
  );
}
