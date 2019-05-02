import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import ContactList from './contact'
import mypic from '../images/BrandonCree.png'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  paper: {
    textAlign: 'center',
    padding: '32px',
  },
  card: {
    width: 300,
  },
  media: {
    height: 300,
  },
  describeMe: {
    backgroundColor: 'rgba(0,0,0,.07)',
    marginBottom: 0,
    padding: '10px',
    textAlign: 'left',
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
            image={mypic}
            title={props.title}
          />
        </Card>
      </div>
      <ContactList/>
      <div>
        <Paper className={classes.paper} elevation={6} square={true}>
          <h3>Who Am I?</h3>
          <p className={`${classes.describeMe} text flow-text`}>
            Hi, my name is Brandon Cree. After 5 years in sales I decided it
            was time for a career change and joined the tech industry. I am
            passionate about learning new things and enjoy taking up new
            challenges, so, web development has been a natural transition. I
            am a highly motivated individual with strong analytical skills
            looking for new opportunities and people to connect with, so feel
            free to contact me.
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
