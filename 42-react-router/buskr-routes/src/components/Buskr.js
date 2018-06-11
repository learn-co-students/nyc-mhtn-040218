import React, { Component } from "react";
import Profile from "./Profile";
import PlayList from "./PlayList";
import TipJar from "./TipJar";
import Wallet from "./Wallet";

class Buskr extends Component {
  state = {
    totalMoney: 0
  }

  getTips = (someTips) => {
    this.setState(prevState => {
      return {
        totalMoney: prevState.totalMoney + someTips
      }
    })
  }

  render() {
    return (
      <div className="buskr">
        <Profile {...this.props.profile} />
        <TipJar money={this.state.totalMoney / 2} getTips={this.getTips} />
        <Wallet wallet={this.state.totalMoney / 2} />
        <PlayList />
      </div>
    );
  }
}

export default Buskr;
