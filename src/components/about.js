import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  card: {
    width: 300,
    marginBottom: '40px'
  },
  media: {
    height: 300,
  },
  describeMe: {
    backgroundColor: 'rgba(242,242,242,0.5)',
    padding: '20px',
  }
})

const AboutMe = (props) => {
  const { classes } = props
  return(
    <section className={classes.root}>
      <div>
        <Card className={classes.card} elevation={12} square={true}>
          <CardMedia
            style={{backgroundColor: props.colors, backgroundSize: props.imageSize}}
            className={classes.media}
            image='../images/BrandonCree.png'
            title={props.title}
          />
        </Card>
      </div>
      <div>
        <Paper className={classes.paper} elevation={6} square={true}>
          <h3>Who Am I?</h3>
          <p className={`${classes.describeMe} text flow-text`}>
            Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m
            studying the ins and outs of full stack web development after 4 years
            in sales in the beer industry. I’m a logical thinker who enjoys problem
            solving and building things out piece by piece.
          </p>
        </Paper>
      </div>
    </section>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
