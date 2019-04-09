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
  },
  content: {
    height: '7rem'
  }
}

const PortCard = (props) => {
  const { classes, card_info } = props
  const playTic = card_info.link || card_info.linkText ? <Button href={card_info.link} className={classes.button} variant="text" onChange={props.resetLightSwitch}>{card_info.linkText}</Button> : null
  return (
    <Card className={classes.card} elevation={6} square={true}>
      <CardActionArea className={classes.action} onClick={props.onChange}>
        <CardMedia
          style={{backgroundColor: props.colors, backgroundSize: card_info.imageSize}}
          className={classes.media}
          image={card_info.image ? card_info.image : props.image}
          title={card_info.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {card_info.title}
          </Typography>
          <Typography component="p">
            {card_info.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PortModal
          card_info={card_info}
        />
        {playTic}
      </CardActions>
    </Card>
  )
}

PortCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PortCard)
