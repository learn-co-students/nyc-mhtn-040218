// just show that same list of notebooks
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SideBar extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.notebooks.map(notebook => {
            return <li key={notebook.id}>{notebook.title}</li>
          })}
        </ul>
        <ul>
          {this.props.paintings.map(notebook => {
            return <li key={notebook.id}>{notebook.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notebooks: state.notebook.notebooks,
    paintings: state.painting.paintings
  }
}

export default connect(mapStateToProps)(SideBar);
