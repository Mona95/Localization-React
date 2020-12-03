const styles = (theme) => ({
  form: {
    position: "relative",
    marginTop: "5%",
    "& > *": {
      margin: theme.spacing(1),
      width: "20%",
    },
  },
  countryFld: {
    marginLeft: "40%",
  },
  errMsg: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
