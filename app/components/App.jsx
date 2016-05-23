import React from 'react'

import Cell from './Cell.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="game-board">
        {this.renderCells()}
      </div>
    )
  }

  renderCells() {
    const cells = [];
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        cells.push(<Cell key={`${x}-${y}`} x={x} y={y} />);
      }
    }
    return cells;
  }
}

export default App
