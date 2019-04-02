import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const AboutMe = (props) => {
  const { classes } = props
  return(
    <Paper className={classes.paper} elevation={12}>
      <h3>Who Am I?</h3>
      <hr/>
      <p className="text flow-text">
        Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m
        studying the ins and outs of full stack web development after 4 years
        in sales in the beer industry. I’m a logical thinker who enjoys problem
        solving and building things out piece by piece.
      </p>
    </Paper>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
