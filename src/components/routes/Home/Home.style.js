import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    padding: "4%",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
  },
  articleP: {
    textAlign: "left",
    lineHeight: 2,
    [theme.breakpoints.down("sm")]: {
      height: 330,
      overflow: "scroll",
    },
  },
}));

export default useStyles;
