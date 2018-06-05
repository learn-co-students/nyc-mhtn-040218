import React, { Component } from "react";
import Name from "./Name";
import Venue from "./Venue";
import Instrument from "./Instrument";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     wallet: 0
  //   }
  // }

  render() {
    return (
      <div className="profile">
        <Name name="Shun Buster" nickname="Shunster" />
        <Instrument type="alto saxophone" material="brass" make="selma" />
        <Venue>Bowling Green</Venue>
        <p>Savings: {this.props.wallet}</p>
      </div>
    );
  }
}

export default Profile;
