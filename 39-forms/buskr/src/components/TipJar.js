import React, { Component } from "react";

class TipJar extends Component {
  // state = {
  //   money: 0
  // }

  handleClick = (event) => {
    console.log(event);
    // const money = this.state.money + 0.5;

    this.props.getTips(1);

    // this.setState({ money });
  }

  render() {
    return (
      <div className="tipjar">
        <p>{this.props.money} BTC</p>
        <button onClick={this.handleClick}>Tip the Busker</button>
      </div>
    );
  }
}

export default TipJar;
