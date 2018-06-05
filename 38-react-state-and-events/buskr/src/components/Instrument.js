import React, { Component } from 'react'

class Instrument extends Component {
  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  render() {
    return (
      <div>
        <p>Playing the {this.props.type}.</p>
        <p>Make: {this.capitalize(this.props.make)} | Material: {this.props.material}</p>
      </div>
    )
  }
}

export default Instrument
