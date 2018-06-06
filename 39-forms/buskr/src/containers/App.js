import React, { Component } from "react";
import "../assets/css/App.css";
import Profile from "../components/Profile";
import PlayList from "../components/PlayList";
import TipJar from "../components/TipJar";
import Wallet from "../components/Wallet";

class App extends Component {
  // Objective:
  // How do we get money from our tipjar to put in our wallet?
  state = {
    wallet: 0
  }

  render() {
    return (
      <div className="App">
        {/* Refactored here for reasons... */}
        {/* <Profile wallet={this.state.wallet} /> */}
        <Profile />
        <TipJar />
        <Wallet wallet={this.state.wallet} />
        <PlayList />
      </div>
    );
  }
}

export default App;
