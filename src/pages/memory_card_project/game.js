import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import DeckCard from './components/card'
import GameInfo from './components/gameInfo'


const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  board: {
    width: 800,
    height: 350,
    backgroundColor: '#1A4A1C',
    display: 'grid',
    gridTemplateColumns: 'repeat(13, auto)',
    gridGap: '10px',
    justifyContent: 'center',
    padding: '20px 20px',
    margin: 40,
  },
  title: {
    width: 800,
    position: 'absolute',
    color: 'white',
    fontSize: 100,
    fontFamily: 'Alfa Slab One, cursive',
    textAlign: 'center',
    zIndex: '1',
    paddingRight: 40,
  },
  startBtn: {
    marginBottom: 40,
    color: 'white',
    backgroundColor: '#1A4A1C',
    '&:hover': {
      backgroundColor: '#308834',
    },
  },
}

const StartReset = (props) => {
  return(
    <Button
      className={props.class}
      size='large'
      onClick={() => {props.title === 'Start' ? props.start() : props.reset()}}
    >{props.title}
    </Button>
  )
}

class GameBoard extends React.Component{
  state = {
    buttonTitle: 'Start',
    deckId: null,
    deck: null,
    match: false,
    locked: false,
    lastValue: null,
    lastId: null,
    matchesLeft: 25,
    turns: 0,
    wins: 0,
  }

  componentDidMount(){
    this.newDeck()
  }

  newDeck = async () => {
    const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const newDeck = await api_call.json()
    this.setState({ deckId: newDeck.deck_id })
    console.log(newDeck)
  }

  getDeck = async () => {
    const { deckId } = this.state
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    const deck = await api_call.json()
    let deckAddFlip = deck.cards.map(card =>
      Object.assign({}, card, {isFlipped: false, matched: false}))
    this.setState({ deck: deckAddFlip, buttonTitle: 'Reset' })
  }

  checkMatch = (value, id) => {
    const { matchesLeft, deck, lastValue, lastId, locked, turns, wins } = this.state
    if (locked) {
      return null
    } else if(lastId === id){
      return null
    }
    deck[id].isFlipped = true
    this.setState({ lastValue: value, lastId: id })
    if(lastValue === value && lastId !== id){
      this.setState({ locked: true })
      setTimeout(() => {
        deck[id].matched = true
        deck[lastId].matched = true
        this.setState({
          match: true,
          lastValue: null,
          lastId: null,
          locked: false,
          matchesLeft: matchesLeft-1,
          wins: matchesLeft === 0 ? wins + 1 : wins,
          turns: turns + 1
        })
      }, 1000)
    } else {
      if(lastValue){
        this.setState({ locked: true })
        setTimeout(() => {
          deck[id].isFlipped = false
          deck[lastId].isFlipped = false
          this.setState({
            match: false,
            lastValue: null,
            lastId: null,
            locked: false,
            turns: turns + 1
          })
        }, 1000)
      }
    }
  }

  reset = async () => {
    await this.newDeck()
    await this.getDeck()
    this.setState({
      match: false,
      locked: false,
      lastValue: null,
      lastId: null,
      matchesLeft: 25,
      turns: 0,
    })
  }

  render(){
    const { buttonTitle, deck, locked, turns, wins } = this.state
    const { classes } = this.props
    const title = deck ? {visibility: 'hidden',
                          opacity: 0,
                          transition: 'visibility 0s 2s, opacity 2s linear',
                        } : null
    return(
      <div className={classes.center}>
        <GameInfo
          turns={turns}
          wins={wins}
        />
        <Paper className={classes.board}>
          <div className={classes.title} style={title}>Concentration Card Game</div>
          {deck && deck.map((card, index) =>
            <div key={card.code}>
              <DeckCard
                image={card.image}
                value={card.value}
                deck={card}
                checkMatch={this.checkMatch}
                id={index}
                isFlipped={card.isFlipped}
                locked={locked}
                matched={card.matched}
              />
            </div>
          )}
        </Paper>
        <StartReset
          class={classes.startBtn}
          title={buttonTitle}
          reset={this.reset}
          start={this.getDeck}
        />
      </div>
    )
  }
}

GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameBoard)
