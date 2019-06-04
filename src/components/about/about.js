import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import ContactList from './contact'
import AboutMyPics from './aboutMyPics'
import mypic from './images/BrandonCree.png'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

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
    padding: 10,
    textAlign: 'left',
  },
  pics: {
    marginTop: 100,
    width: 680
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
      <div className={`${classes.pics} pic-slider`}>
        <AboutMyPics/>
      </div>
    </section>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
