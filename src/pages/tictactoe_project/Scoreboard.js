import React, { Component } from 'react'
import './tictactoe.css'

export default class Scoreboard extends Component{
  render(){
    return(
      <div className="ScoreBoard Permanent">
        <div className='Icon1Cont'>
          <h4 className='P1Icon Permanent'>Player 1 Icon</h4>
          <div className='Icon'>{this.props.player1Icon}</div>
        </div>
        <div>
          <h2 className="Permanent">Score</h2>
            <table>
              <tbody>
                <tr>
                  <td id='Player1'>Player 1</td>
                  <td id='Player2'>Player 2</td>
                </tr>
                <tr>
                  <td>{this.props.player1Score}</td>
                  <td>{this.props.player2Score}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='Icon2Cont'>
            <h4 className='P2Icon Permanent'>Player 2 Icon</h4>
            <div className='Icon'>{this.props.player2Icon}</div>
          </div>
      </div>
    )
  }
}
