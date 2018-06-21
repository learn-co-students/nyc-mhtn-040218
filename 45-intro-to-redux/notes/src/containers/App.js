import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/css/App.css';
import { connect } from 'react-redux';
import NoNotes from './NoNotes';
import { addNoteAction } from '../actions'

class App extends Component {
  state = {
    note: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.props)
    this.props.addNote(this.state.note);
    // this.props.dispatch({
    //   type: "ADD_NOTE",
    //   payload: { text: this.state.note }
    // })
    // this.props.dispatch({
    //   type: "ADD_NOTE",
    //   payload: { text: this.state.note + 'a' }
    // })
    // this.props.dispatch({
    //   type: "ADD_NOTE",
    //   payload: { text: this.state.note + 'b' }
    // })
    // console.log(this.props.notes);
  }

  // addNote = (note) => {
  //   this.props.dispatch({
  //     type: "ADD_NOTE",
  //     payload: { text: note }
  //   })
  // }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="note"
            value={this.state.note}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Note" />
        </form>
        <ul>
          {this.props.notes.map(note => <li key={note.id}>{note.text}</li>)}
        </ul>
        <NoNotes poo={"a thing"} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.notes.filter(note => note.id.includes('ee')))
  return {
    notes: state.notes //..filter(note => note.id.includes('ee'))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch(addNoteAction(note))
    }
  }
}

// connect() => HOC
export default connect(mapStateToProps, mapDispatchToProps)(App);
