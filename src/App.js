import React, { Component } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";

class App extends Component {
  render() {
    return <Canvas>1</Canvas>;
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
