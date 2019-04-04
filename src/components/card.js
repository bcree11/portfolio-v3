import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import PortModal from './portModal'

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
  action: {
    backgroundColor: 'inherit!important',
  }
}

const PortCard = (props) => {
  const { classes, linkText, link } = props
  const playTic = link || linkText ? <Button href={link} className={classes.button} variant="text" onChange={props.resetLightSwitch}>{linkText}</Button> : null
  return (
    <Card className={classes.card} elevation={6} square={true}>
      <CardActionArea className={classes.action} onClick={props.onChange}>
        <CardMedia
          style={{backgroundColor: props.colors, backgroundSize: props.imageSize}}
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PortModal/>
        {playTic}
      </CardActions>
    </Card>
  )
}

PortCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PortCard)
