// Goal:
// Using State:
// Write a button that can add notebooks to state
// Proint out those notebooks
// Use any number of components that you want.

import React, { Component } from 'react';
// import UUID from 'uuid';
import { connect } from 'react-redux';
import { addNotebook } from '../actions';
import ControlBar from './ControlBar';

class NoteContainer extends Component {
  // state = {
  //   notebooks: [],
  // }

  newNotebook = () => {
    this.props.addNotebook("I'm a new notebook")
    // this.props.dispatch(addNotebook("I'm a new notebook"))
    // this.props.dispatch({
    //   type: 'ADD_NOTEBOOK',
    //   payload: {
    //
    //   }
    // })
    // const notebooks = [...this.state.notebooks,
    //   {
    //     id: UUID(),
    //     title: "I'm a new notebook"
    //   }
    // ];
    // this.setState({ notebooks });
  }

  render() {
    return (
      <div className="note-container">
        <ControlBar />
        {/* <button onClick={this.newNotebook}>New Notebook</button> */}
        <ul>
          {this.props.notebooks.map(notebook => {
            return <li key={notebook.id}>{notebook.title} | {notebook.id}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('what is inside', state);
  return {
    notebooks: state.notebook.notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNotebook: (title) => {
      // this.props.dispatch(addNotebook("I'm a new notebook"))
      // That becomes this
      dispatch(addNotebook(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
