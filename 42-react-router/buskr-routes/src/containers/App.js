import React, { Component } from "react";
import "../assets/css/App.css";
// import UUID from 'uuid';
import Buskr from "../components/Buskr";
import { Link, Route, Switch } from "react-router-dom";

let idHack = 0;

class App extends Component {
  state = {
    buskrs: [
      {
        id: idHack++,
        profile: {
          name: { name: "Shun Buster", nickname: "Shunster" },
          instrument: { type: "alto saxophone", material: "brass", make: "selma" },
          venue: "Bowling Green"
        },
        slug: "/shunster"
      },
      {
        id: idHack++,
        profile: {
          name: { name: "Michael", nickname: "Mike" },
          instrument: { type: "violin", material: "wood", make: "costco" },
          venue: "Central Park"
        },
        slug: "/mike"
      }
    ]
  }

  render() {
    const shunster = this.state.buskrs[0];
    const mike = this.state.buskrs[1];

    return (
      <div className="App">
        <div className="nav">
          { /* Code will go here */ }
        </div>

        <Buskr key={shunster.id} {...shunster} />
        <Buskr key={mike.id} {...mike} />
      </div>
    );
  }
}

export default App;
