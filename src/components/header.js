import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: 'calc(100vh - 64px)',
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("./images/code.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '85%',
    backgroundPositionX: '59%',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    lineHeight: '1',
  },
  title: {
    fontSize: 'calc(16em + 100 * ((70vw - 1700px) / (900)))',
    textTransform: 'none',
    // transform: 'scale(1,2)',
    // marginBottom: '2em',
    fontWeight: 900,
  },
  titleContainer: {
    width: '70vw',
    color: '#ffae1a',
  },
  links: {
    color: '#ffae1a!important',
  },
  linksContainer: {
    marginTop: '4rem',
    fontSize: '3rem',
  },
  career: {
    fontWeight: 900
  }
})
//color: #ffae1a

const Header = ({ classes }) => (
    <header className={classes.root}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>Junior Web Developer</span>
        {/*<h4 className={classes.career}>Junior Web Developer</h4>*/}
        {/*<div className={classes.linksContainer}>
          <a className={classes.links} href="https://github.com/bcree11" target="_blank" rel="noopener noreferrer">
            <i className="zmdi zmdi-github-box"></i>
          </a>{' '}
          <a className={classes.links} href="https://www.linkedin.com/in/bcree/" target="_blank" rel="noopener noreferrer">
            <i className="zmdi zmdi-linkedin-box"></i>
          </a>
        </div>*/}
      </div>
    </header>
  )

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
