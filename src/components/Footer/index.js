import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Footer.style.js";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography className={classes.footerText}>
        This is a sample project for Scorp team
      </Typography>
    </div>
  );
}
