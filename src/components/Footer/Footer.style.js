import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    background: "#d1c3b2",
    textAlign: "center",
  },
  footerText: { marginTop: 35 },
}));

export default useStyles;
