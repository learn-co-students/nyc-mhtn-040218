import React, { Component } from 'react';
import SnackList from './SnackList';
import Adapter from './Adapter';
import withLoading from '../hocs/withLoading';

class Snacks extends Component {
  // By using our HOC, we know we get some initialData.
  // So we should safely be able to set this and render it.
  state = {
    snacks: this.props.initialData,
  }

  // What we've abstracted away with our HOC.
  //
  // componentDidMount() {
  //   console.log('test', this.props)
  //   this.getSnacks();
  // }

  // This was abstracted away and put into Adapter.
  //
  // getSnacks = () => {
  //   fetch(
  //     `http://localhost:3000/snacks/`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": localStorage.getItem("token")
  //       }
  //     }
  //   )
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       snacks: json,
  //     });
  //   });
  // }

  render() {
    console.log('Snacks', this.props);
    return (
      <div className="snacks">
        <h2>Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

// We not use our HOC and pass in the dataLoader used by this Component.
export default withLoading(Snacks, Adapter.getSnacks);
/*
export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Snacks />
      </div>
    )
  }
}
*/
