import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "99vw",
    marginLeft: "1vw",
  },

  pm25: {
    height: "100%",
  },
  polBox: {
    height: "40vh",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container spacing={2}>
      <Grid item xs={3}>
        <Paper className={classes.pm25}></Paper>
      </Grid>
      <Grid item container spacing={2} xs={9}>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.polBox}></Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
