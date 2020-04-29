import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item xs={3}>
          2
        </Grid>
        <Grid item xs={3}>
          3
        </Grid>
        <Grid item xs={3}>
          4
        </Grid>
        <Grid item xs={6}>
          5
        </Grid>
        <Grid item xs={6}>
          6
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
