import React, { Component } from "react";
import Name from "./Name";
import Venue from "./Venue";
import Instrument from "./Instrument";

class Profile extends Component {
  render() {
    const { name, instrument, venue } = this.props;

    return (
      <div className="profile">
        <Name {...name} />
        <Instrument {...instrument} />
        <Venue>{venue}</Venue>
      </div>
    );
  }
}

export default Profile;
