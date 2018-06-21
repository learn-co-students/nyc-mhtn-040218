import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoNotes extends Component {
  render() {
    console.log('NoNotes renders')
    return (
      <p>{this.props.hello} | {this.props.poo}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    hello: state.hello
  }
}

export default connect(mapStateToProps)(NoNotes);
