import React, { Component } from "react";
import Image from "../image/Image";
import Uploader from "../uploader/Uploader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        <Uploader />
      </div>
    );
  }
}

export default App;
