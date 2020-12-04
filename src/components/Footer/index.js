import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Footer.style.js";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.footer}>
      <Typography className={classes.footerText}>
        {t("This is a sample project for Scorp team")}
      </Typography>
    </div>
  );
}
