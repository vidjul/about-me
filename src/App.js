import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import Intro from './components/Intro';
import MenuBar from './components/MenuBar'

import "./App.css";

class App extends Component {

  render() {
    return (
      <Grid>
        <MenuBar />
      </Grid>
    );
  }
}

export default App;