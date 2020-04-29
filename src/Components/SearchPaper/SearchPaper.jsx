import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  searchButton: {
    marginTop: 10,
  },
}));

const SearchPaper = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Box className={classes.flex}>
        <h1>Air Quality Index </h1>
        <TextField
          fullWidth
          label="Enter city, state, station"
          variant="outlined"
        />
        <Button
          className={classes.searchButton}
          variant="contained"
          color="primary"
          disableElevation
        >
          Search
        </Button>
      </Box>
    </Grid>
  );
};

export default SearchPaper;
