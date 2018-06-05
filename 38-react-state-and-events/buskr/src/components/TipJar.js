import React, { Component } from "react";

class TipJar extends Component {
  state = {
    money: 0
  }

  render() {
    return (
      <div className="tipjar">
        <p>{this.state.money}</p>
        <button>Tip the Busker</button>
      </div>
    );
  }
}

export default TipJar;
