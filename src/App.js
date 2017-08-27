import React, { Component } from "react";

import Routes from "./Routes/";
import TopNav from "./Components/TopNav/";

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Routes />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
