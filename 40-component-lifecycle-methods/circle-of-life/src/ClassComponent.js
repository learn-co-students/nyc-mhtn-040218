import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
    console.log(`constructor of ${this.props.name}`)
  }

  componentWillMount() {
    console.log(`componentWillMount of ${this.props.name}`)
  }

  componentDidMount() {
    console.log(`componentDidMount of ${this.props.name}`)
    this.setState({});
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate of ${this.props.name}`)
    return false;
  }

  componentWillUpdate() {
    console.log(`componentWillUpdate of ${this.props.name}`)
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate of ${this.props.name}`)
  }

  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps of ${this.props.name}`)
  }


  render() {
    console.log(`render of ${this.props.name}`)
    const { name, color, children } = this.props;
    // console.log(this.props)

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
