require('./main.css');

import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App.jsx'

const firstPlayer = 'x';
function nextPlayer(player) {
  return player == 'x' ? 'o' : 'x';
}

const initialState = {
  winner: null,
  currentPlayer: firstPlayer,
  cell: {}
};

function winnerInSequenceOfCells(cell,x,y,dx,dy) {
  [0,1,2].map()
}

function checkWinner(state) {
  const winners =
    [
      ...[0,1,2].map((y) => winnerInSequenceOfCells(cell,0,y,1,0)),
      ...[0,1,2].map((x) => winnerInSequenceOfCells(cell,0,x,1,0)),
      map((x) => winnerInSequenceOfCells(cell,0,0,1,1)),
      map((x) => winnerInSequenceOfCells(cell,2,2,-1,-1)),
    ];

  const winner = winners.find(winner => !winner);
  if(winner) {
    console.log(winner);
    return Object.assign({}, state, {
      winner
    })
  } else {
    return state;
  }
};

function handlePlay(state, action){
  const {x, y} = action;
  const key = `${x}-${y}`;
  if (state.cell[key] != null) {
    return state;
  }

  const newCellState = state.currentPlayer;

  return {
    winner: state.winner,
    currentPlayer: nextPlayer(state.currentPlayer),
    cell: Object.assign({}, state.cell, {
      [key]: newCellState
    })
  }
}

const store = createStore((state = initialState, action) => {
  console.log(state, action);
  switch(action.type) {
    case "PLAY":
      return checkWinner(handlePlay(state, action));
    default:
      return state;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
