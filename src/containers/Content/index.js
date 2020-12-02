import React from "react";
import useStyles from "./Content.style.js";
import Home from "../../components/routes/Home";
import Contact from "../../components/routes/Contact";

export default function Content() {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <Home />
      <Contact />
    </div>
  );
}
