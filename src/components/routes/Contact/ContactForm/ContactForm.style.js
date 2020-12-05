const styles = (theme) => ({
  form: {
    position: "relative",
    marginTop: "5%",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "35%",
      [theme.breakpoints.down("sm")]: {
        width: "60%",
        margin: 3,
      },
    },
  },
  countryFld: {
    marginLeft: "32.5%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20%",
    },
  },
  errMsg: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  textareaFld: {
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
});

export default styles;
