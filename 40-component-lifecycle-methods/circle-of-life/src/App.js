import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(`constructor of App`)
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    console.log(`componentWillMount of App`)
    // Dont do this!!!
    // this.setState({ counter: this.state.counter + 1 })
  }

  componentDidMount() {
    console.log(`componentDidMount of App`)

    // Fetches, anything async woudl go here.
  }

  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps of App`)
  }


    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    }

  render() {
    console.log(`render of App`)
    return (
      <div>
        <button onClick={this.handleClick}>Change things</button>
      {/*<ClassComponent counter={this.state.counter} name="great grand uncle" />*/}
      <ClassComponent name="great grandparent">
        {/* <p>{this.state.counter}</p> */}
        <ClassComponent name="grandparent">
          <ClassComponent counter={this.state.counter} name="parent" />
          {/*
            <ClassComponent name="child">
              <ClassComponent name="grand child">
              </ClassComponent>
            </ClassComponent>
          </ClassComponent>
          <ClassComponent name="uncle">
            <ClassComponent name="cousin" />
          </ClassComponent>
          <ClassComponent name="aunt" />
          */}
        </ClassComponent>
      </ClassComponent>
            </div>
    );
  }
}

export default App;
