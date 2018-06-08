import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

class App extends Component {
  render() {
    return (
      <FunctionalComponent name="great grandparent">
        <ClassComponent name="grandparent">
          <ClassComponent name="parent">
            <ClassComponent name="child">
              <ClassComponent name="grand child" />
            </ClassComponent>
          </ClassComponent>
        </ClassComponent>
      </FunctionalComponent>
    );
  }
}

export default App;
