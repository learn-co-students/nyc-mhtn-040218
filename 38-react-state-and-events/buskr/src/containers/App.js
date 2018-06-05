import React, { Component } from "react";
import logo from "../assets/svg/logo.svg";
import "../assets/css/App.css";
import Profile from "../components/Profile";
import PlayList from "../components/PlayList";
import TipJar from "../components/TipJar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <TipJar />
        <PlayList />
      </div>
    );
  }
}

export default App;
