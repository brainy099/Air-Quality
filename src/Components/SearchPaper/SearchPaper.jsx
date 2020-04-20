import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    margin: "5vh",
    padding: "5vh",
    height: "60vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SearchPaper = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper className={classes.flex}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </Paper>
    </Grid>
  );
};

export default SearchPaper;
