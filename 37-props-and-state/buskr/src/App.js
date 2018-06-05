import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './Location'
import Instrument from './Instrument'
import Name from './Name'
import Songs from './Songs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name name="Shun Buster" nickname="Shunster" />
        <Location></Location>
        <Instrument
          type="alto saxophone"
          material="brass"
          make="selma"
        />
        <Songs></Songs>
      </div>
    );
  }
}

export default App;
