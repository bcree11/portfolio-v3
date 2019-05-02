import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

import backOfDeck from '../images/backOfDeck.png'

const styles = {
  card: {
    height: 70,
    width: 50,
    margin: 0,
    backgroundImage: `url(${backOfDeck})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'none'
  },
}

const DeckCard = (props) => {

  function handleClick() {
    if(!props.locked){
      props.checkMatch(props.value, props.id)
    }
  }

  const { classes, matched } = props
  const background = matched ? 'none' : `url(${props.image})`
  return (
    <Flippy
      isFlipped={props.isFlipped}
    >
      <FrontSide
        onClick={() => handleClick()}
        className={classes.card}
      >
      </FrontSide>
      <BackSide
        className={classes.card}
        style={{ backgroundImage: background}}
      >
      </BackSide>
    </Flippy>
  )
}

DeckCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DeckCard)
