import React, { Component } from "react";
import "../assets/css/App.css";
import Profile from "../components/Profile";
import PlayList from "../components/PlayList";
import TipJar from "../components/TipJar";
import Wallet from "../components/Wallet";

class App extends Component {
  // Objective:
  // How do we get money from our tipjar to put in our wallet?
  // New objectives:
  // - What is the concept of money & wallet?
  // - Refactor TipJar and Wallet
  // - Make our request form
  // - Refactor & Lift State
  // - do something more interesting...
  state = {
    // money: 0,
    // wallet: 0
    // KEY POINT for Lifting State!
    // ============================
    // Moving our money state up here makes more sense.
    // The money in the TipJar and Wallet are the same
    // in that they can be derived from a **single source of truth**!!
    // So we'd want that shared state to be moved into
    // the parent, and then we'd pass down props for
    // money (into TipJar) and wallet (into Wallet)
    // whose values are derived from totalMoney.
    totalMoney: 0
  }

  // Option 1:
  // Use a function, pass into TipJar and grab state
  // to setState here in App.
  getTips = (someTips) => {
    console.log('we will get some tips')
    // this.setState(prevState => {
    //   return {
    //     wallet: prevState.wallet + someTips
    //   }
    // })
    this.setState(prevState => {
      return {
        totalMoney: prevState.totalMoney + someTips
      }
    })
    // DONT DO THIS!!!!!
    // console.log(this.state)
  }

  // Option 2:
  // Somehow, set the tipjar money state in here
  // so we an pass it down into Wallet and TipJar.
  // addTip = (event) => {
  //   console.log("in addTip", event);
  //   event.persist();
  //
  //   setTimeout(() => {
  //     console.log("async, outside of addtip", event);
  //   }, 1000);
  //
  //   this.setState({
  //     event
  //   })
  //
  //   const money = this.state.money + 1;
  //
  //   this.setState({ money });
  // }

  render() {
    console.log("render", this.state.event);
    return (
      <div className="App">
        {/* Refactored here for reasons... */}
        {/* <Profile wallet={this.state.wallet} /> */}
        <Profile />
        {/* <TipJar money={this.state.money} handleClick={this.addTip} /> */}
        <TipJar money={this.state.totalMoney / 2} getTips={this.getTips} />
        <Wallet wallet={this.state.totalMoney / 2} />
        <PlayList />
      </div>
    );
  }
}

export default App;
