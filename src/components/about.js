import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    width: 300,
    marginBottom: '40px'
  },
  media: {
    height: 300,
  },
})

const AboutMe = (props) => {
  const { classes } = props
  return(
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div >
        <Card className={classes.card} elevation={12}>
          <CardMedia
            style={{backgroundColor: props.colors, backgroundSize: props.imageSize}}
            className={classes.media}
            image='../images/BrandonCree.png'
            title={props.title}
          />
        </Card>
      </div>
      <div>
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
      </div>
    </section>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
