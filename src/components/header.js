import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: '60vh',
    backgroundImage: `url("./images/beachSunset.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    lineHeight: '1',
  },
  title: {
    color: 'white',
    fontSize: 'calc(4em + (50 - 4) * ((100vw - 300px) / (1600 - 300)))',
    fontWeight: 'bold',
    // transform: 'scale(1,2)',
    marginBottom: '2em',
  }
})

const Header = ({ classes }) => {
  return(
    <div className={classes.root}>
      <span className={classes.title}>BRANDON CREE</span>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
