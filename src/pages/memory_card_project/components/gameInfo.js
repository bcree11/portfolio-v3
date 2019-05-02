import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  info: {
    marginBottom: 0,
  }
}

const GameInfo = (props) => {
  const { classes, turns, wins } = props
  return(
    <React.Fragment>
      <h2 className={classes.info}>Turns: {turns} | Wins: {wins}</h2>
    </React.Fragment>
  )
}

GameInfo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameInfo)
