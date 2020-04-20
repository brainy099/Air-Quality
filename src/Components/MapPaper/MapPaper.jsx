import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import { makeStyles } from "@material-ui/core/styles";
import "react-svg-map/lib/index.css";

const useStyles = makeStyles((theme) => ({
  mapPaper: {
    display: "flex",
    margin: "5vh",
    padding: "5vh",
    height: "60vh",
  },
}));

const MapPaper = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper className={classes.mapPaper}>
        <SVGMap map={India} />
      </Paper>
    </Grid>
  );
};

export default MapPaper;
