import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SearchPaper from "../../Components/SearchPaper/SearchPaper";
import MapPaper from "../../Components/MapPaper/MapPaper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Landing = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <SearchPaper />
          <MapPaper />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
