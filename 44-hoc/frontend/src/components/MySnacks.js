import React, { Component } from 'react';
import SnackList from './SnackList';

class MySnacks extends Component {
  state = {
    snacks: [],
  }

  componentDidMount() {
    this.getSnacks();
  }

  getSnacks = () => {
    fetch(
      `http://localhost:3000/users/${localStorage.getItem("id")}/snacks`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    .then(res => res.json())
    .then(json => {
      this.setState({
        snacks: json,
      });
    });
  }

  render() {
    return (
      <div className="my-snacks">
        <h2>My Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default MySnacks;
