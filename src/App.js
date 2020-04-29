import React, { useEffect } from "react";

import { connect } from "react-redux";
import Landing from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import { fetchFromApi } from "./redux/actions";
import "./App.css";

const App = ({ fetchFromApi }) => {
  useEffect(() => {
    fetchFromApi();
  }, [fetchFromApi]);
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchFromApi: () => dispatch(fetchFromApi()),
});

export default connect(null, mapDispatchToProps)(App);
