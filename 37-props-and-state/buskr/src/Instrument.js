import React, { Component } from 'react'

class Instrument extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      type: this.props.type,
      make: this.props.make
    }

    // this.onClick = this.onClick.bind(this);
  }

  // state = {
  //   type: this.props.type
  // }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  onClick = () => {
    console.log('clicked!!!')
    console.log('state', this.state)
    console.log('props', this.props)
    console.log('this', this)
    // this.state.type = this.capitalize(this.state.type);
    this.setState({
      type: this.capitalize(this.state.type),
      make: this.capitalize(this.state.make)
    }, () => {
      console.log('in callback of setState', this.state)
    })
    console.log('after setState', this.state)
    // console.log('after state', this.state)
    // const state = this.state
    // debugger
    //  this.forceUpdate() NEVERE!!!!!!! PELASE!!!
  }

  render() {
    // console.log('after setState in render', this.state)
    const { material, make } = this.props;
    // this.props.type = this.capitalize(this.props.type);

    // console.log(this.props)
    return (
      <div>
        <p>prop!! {this.props.type}</p>
        <p>state!! {this.state.type}</p>
        <p>{material}</p>
        <p>{this.state.make}</p>
        <button onClick={this.onClick}>Click Me!!!</button>
      </div>
    )
  }
}

export default Instrument
