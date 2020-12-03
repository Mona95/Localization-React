import React from "react";
import Navbar from "../../../containers/Navbar";
import useStyles from "./Contact.style.js";
import ContactForm from "./ContactForm";

export default function Contact() {
  let classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.contentWrapper}>
        <span className={classes.title}>Contact Us</span>
        <ContactForm />
      </div>
    </div>
  );
}
