import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Slider,
  Slide,
} from 'react-materialize'
import Paper from '@material-ui/core/Paper';

import {myImages} from './store'

const styles = theme => ({
  sliderPics: {
    backgroundColor: 'white',
    backgroundSize: 'contain!important',
    backgroundRepeat: 'no-repeat',
  },
  caption: {
    width: '60%',
    color: 'black',
    padding: '10px 0',
    left: '20%',
    bottom: '5%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',

  },
  sfColor: {
    color: 'black!important',
  },
  capMargin: {
    margin: 0
  },
})

const AboutMyPics = (props) => {
  const { classes } = props
  return (
    <Slider className={classes.test}>
    {myImages.map((image, index) =>
      <Slide key={image.id} image={<img className={classes.sliderPics} src={image.image} alt={image.bigCaption}/>}>
        <Paper className={`${classes.caption} hide-caption center-align`}>
          <h3 className={classes.capMargin}>{image.bigCaption}</h3>
          {!image.pch && image.smallCaption && <h5 className='black-text'>{image.smallCaption}</h5>}
          {image.pch && <p className={classes.sfColor}>{image.smallCaption}</p>}
        </Paper>
      </Slide>
    )}
    </Slider>
  )
}

AboutMyPics.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMyPics)
