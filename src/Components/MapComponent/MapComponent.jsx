import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import { makeStyles } from "@material-ui/core/styles";
import "react-svg-map/lib/index.css";

const useStyles = makeStyles((theme) => ({
  mapComponent: {
    display: "flex",
    margin: "5vh",
    padding: "5vh",
    height: "60vh",
  },
}));

const MapComponent = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Box className={classes.mapComponent}>
        <SVGMap onLocationClick={(e) => console.log(e.target)} map={India} />
      </Box>
    </Grid>
  );
};

export default MapComponent;
