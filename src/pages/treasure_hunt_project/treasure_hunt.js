import React, { Component } from 'react';
import './treasure_hunt.css';
import Board from './board.js'
import Header from './Header'

class TreasureHunt extends Component {
  render() {
    return (
      <div className="TH-App" style={{backgroundColor: '#d4bea6'}}>
        <Header/>
        <Board/>
      </div>
    );
  }
}

export default TreasureHunt;
