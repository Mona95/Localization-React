import React from "react";
import Navbar from "../../../containers/Navbar";
import useStyles from "./Contact.style.js";
import ContactForm from "./ContactForm";
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
