import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    const { name, color, children } = this.props;

    return (
      <div style={{ border: `1px solid ${color}`, margin: 10, textAlign: 'center' }}>
        <p style={{ color }}>{name}</p>
        {children}
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;
