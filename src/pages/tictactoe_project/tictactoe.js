import React, { Component } from 'react';
import './tictactoe.css';
import Board from './Board'
import Header from './Header'

class TicTacToe extends Component {
  render() {
    return (
      <div className="TicTacToe Permanent">
        <Header/>
        <Board/>
      </div>
    );
  }
}

export default TicTacToe;
