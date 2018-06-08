import React from 'react';
import StopWatch from './StopWatch';
import UUID from 'uuid';

export default class App extends React.Component {
  state = {
    stopwatches: [
      {
        id: UUID()
      }
    ]
  }

  addWatch = () => {
    let stopwatches = [...this.state.stopwatches];
    stopwatches.push({ id: UUID() });
    this.setState({ stopwatches });
  }

  removeWatch = (id) => {
    let stopwatches = [...this.state.stopwatches];
    stopwatches = stopwatches.filter(stopwatch => stopwatch.id !== id);
    this.setState({ stopwatches });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          { this.state.stopwatches.map(stopwatch => {
            return <StopWatch key={stopwatch.id} id={stopwatch.id} tossWatch={this.removeWatch} />
          })}
        </div>
        <button onClick={this.addWatch}>Add Watch</button>
      </div>
    )
  }
}
