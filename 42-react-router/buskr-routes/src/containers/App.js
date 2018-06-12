import React, { Component } from "react";
import "../assets/css/App.css";
// import UUID from 'uuid';
import Buskr from "../components/Buskr";
import { Route, Switch, Link, NavLink } from 'react-router-dom';

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
      },
      {
        id: idHack++,
        profile: {
          name: { name: "Ian", nickname: "The G" },
          instrument: { type: "harpsichord", material: "dreams", make: "sam's club" },
          venue: "Madison Square Park"
        },
        slug: "/the-g"
      }
    ]
  }

  render() {
    const shunster = this.state.buskrs[0];
    const mike = this.state.buskrs[1];
    const ian = this.state.buskrs[2];

    return (
      <div className="App">
        <div className="nav">
          { /* Code will go here */ }
          { this.state.buskrs.map(buskr => {
            return <Link to={buskr.slug}>{buskr.profile.name.nickname}</Link>
          })}
        </div>

        <Switch>
          { this.state.buskrs.map(buskr => {
            return <Route
              path={buskr.slug}
              exact
              render={ () => <Buskr key={buskr.id} {...buskr} /> }
            />
          })}
        </Switch>
        {/*
        <Switch>
          <Route
            path="/"
            exact
            render={ () => <Buskr key={ian.id} {...ian} /> }
          />
          <Route
            path="/shunster"
            render={ () => <Buskr key={shunster.id} {...shunster} /> }
          />
          <Route
            path="/mike"
            render={ () => <Buskr key={mike.id} {...mike} /> }
          />
        </Switch>
        */}
      </div>
    );
  }
}

export default App;
