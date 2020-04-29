import React from "react";
import SearchPaper from "../../Components/SearchPaper/SearchPaper";
import MapComponent from "../../Components/MapComponent/MapComponent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="lg">
        <Grid direction="row-reverse" container spacing={3}>
          <MapComponent />
          <SearchPaper />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
