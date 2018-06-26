import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNotebook } from '../actions';

class ControlBar extends Component {
  newNotebook = () => {
    this.props.addNotebook("I'm a new notebook")
  }

  destroyItAll = () => {
    this.props.dispatch({ type: "RESET" })
  }

  render() {
    return (
      <div>
        <button onClick={this.newNotebook}>New Notebook</button>
        <button onClick={this.destroyItAll}>Goodbye</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNotebook: (title) => {
      dispatch(addNotebook(title))
    }
    , dispatch
  }
}

export default connect(null, mapDispatchToProps)(ControlBar);
