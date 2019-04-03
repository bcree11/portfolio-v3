import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: '60vh',
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url("./images/beachSunset.jpg")`,
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
    fontSize: 'calc(4em + (50 - 4) * ((100vw - 300px) / (1600 - 300)))',
    // transform: 'scale(1,2)',
    marginBottom: '2em',
  },
  links: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold',
  }
})

const Header = ({ classes }) => (
    <header className={classes.root}>
      <div className={classes.links}>
        <span className={classes.title}>BRANDON CREE</span>
        <h4>Junior Web Developer</h4>
        <div style={{marginBottom: '1em'}}>
          <a style={{marginRight: '1rem'}} href="https://github.com/bcree11" target="_blank">
            <i className="zmdi zmdi-github-box"></i>
          </a>{' '}
          <a href="https://www.linkedin.com/in/bcree/" target="_blank">
            <i className="zmdi zmdi-linkedin-box"></i>
          </a>
        </div>
      </div>
    </header>
  )

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
