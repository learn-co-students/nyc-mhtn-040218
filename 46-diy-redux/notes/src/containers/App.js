import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ADD_NOTEBOOK from '../actions';
import { addNotebook } from '../actions';
import NoteContainer from './NoteContainer';
import SideBar from './SideBar';

class App extends Component {
  test = () => {
    // this.props.dispatch({ type: "", payload: {} })
    // this.props.dispatch(ADD_NOTEBOOK);
    this.props.dispatch(addNotebook("The Notebook"));
    this.props.dispatch(addNotebook("The Notebook Returns"));
    this.props.dispatch(addNotebook("The Notebook Fights Back"));
    this.props.dispatch(addNotebook("The Notebook The End"));
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <button onClick={this.test}>TEST REDUX!!!</button>

        <NoteContainer />
        <SideBar />
      </div>
    );
  }
}

// super high!
export default connect()(App);
