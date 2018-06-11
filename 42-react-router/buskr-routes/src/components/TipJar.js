import React, { Component } from "react";

class TipJar extends Component {
  state = {
    money: 0
  }

  validateTip(amount) {
    return amount < 0 ? 0 : amount
  }

  handleClick = (event) => {
    this.props.getTips(this.state.money);
  }

  handleMoney = (event) => {
    this.setState({
      [event.target.name]: this.validateTip(parseInt(event.target.value))
    })
  }

  render() {
    return (
      <div className="tipjar">
        <p>{this.props.money} BTC</p>
        <input
          type="number"
          name="money"
          value={this.state.money}
          onChange={this.handleMoney}
        />
        <button onClick={this.handleClick}>Tip the Busker</button>
      </div>
    );
  }
}

export default TipJar;
