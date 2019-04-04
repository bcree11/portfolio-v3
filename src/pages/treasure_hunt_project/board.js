import React, { Component } from 'react';
import './treasure_hunt.css';
import Button from '@material-ui/core/Button'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      spaces: ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
      count: 9,
      id: '',
      winner: 1,
      bomb: 1,
      message: " More Attempts"
  }
}
  randomNumb(){
    let {bomb, winner} = this.state
    do{
      winner = Math.floor((Math.random() * 9));
      bomb = Math.floor((Math.random() * 9));
    } while(bomb === winner);
    this.setState({bomb:bomb, winner:winner})
  }

  handleChange(e){
    let { spaces, count, id, bomb, winner, message} = this.state
    id = e.target.id
    // spaces[id]==="Win" || spaces[id]="Bomb" ? this.reset() : winner == id ? spaces[id]="Win" : bomb == id ? spaces[id]="Bomb" : spaces[id]="Tree"
    count = count > 0 ? count - 1 : 0
    if(spaces[winner]==="🎁" || spaces[bomb]==="💩"){
      return
    } else if(winner === id){
        spaces[id]="🎁"
        count = "You Found The Present!"
        message = ``
        // eslint-disable-next-line
      } else if (bomb == id){
        spaces[id]='💩'
        count = "You Got Caught!"
        message = ``
        // eslint-disable-next-line
      } else if (spaces[id]=="🎅"){
        count= count +1
      } else {
        spaces[id]="🎅"
      }
    this.setState({ count: count, spaces:spaces, id:id, message:message})
        console.log("bomb:" +bomb)
        console.log("winner:" +winner)
       console.log("id:" +id);
       console.log("spaces:"+spaces);
  }




reset() {
  this.setState({
    spaces: ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
    count: 9,
    id: '',
    message: " More Attempts"
  })
  this.randomNumb()
}

  render() {
      let squares = this.state.spaces.map((val, index) => {
        return(<div className="TH-Tiles" id={index} onClick={this.handleChange.bind(this)}>{val}</div>)
      })
    return (
      <div className="TH-BoardComp">
        <h1 className="TH-Find">Find The Present</h1>
        <h1 className="TH-Message">{this.state.count}{this.state.message}</h1>
        <div className="TH-Game">
          {squares}
        </div>
        <div className="TH-ResetButton">
          <Button variant="contained" size="large" className="TH-btn" onClick={(e) => this.reset(e)}>
            <h4>Reset</h4>
          </Button>
        </div>
      </div>
    );
  }

  componentDidMount(){
    // this.randomNumb()
    //Don't have to put the function randomNumb() here, can just put the logic
      let {bomb, winner} = this.state
      do{
        winner = Math.floor((Math.random() * 9));
        bomb = Math.floor((Math.random() * 9));
      } while(bomb === winner);
      this.setState({bomb:bomb, winner:winner})
  }
}


export default Board;
//
