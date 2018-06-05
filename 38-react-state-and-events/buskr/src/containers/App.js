import React, { Component } from "react";
import logo from "../assets/svg/logo.svg";
import "../assets/css/App.css";
import Profile from "../components/Profile";
import PlayList from "../components/PlayList";
import TipJar from "../components/TipJar";

class App extends Component {
  state = {
    wallet: 0
  }

  render() {
    return (
      <div className="App">
        <Profile wallet={this.state.wallet} />
        <TipJar />
        <PlayList />
      </div>
    );
  }
}

export default App;
