import React from "react";
import Navbar from "../../../containers/Navbar";
import useStyles from "./Home.style.js";

export default function Home() {
  let classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.contentWrapper}>Home Page</div>
    </>
  );
}
