import React from "react";
import Navbar from "../../../containers/Navbar";
import useStyles from "./Contact.style.js";

export default function Contact() {
  let classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.contentWrapper}>Contact Us Page</div>
    </div>
  );
}
