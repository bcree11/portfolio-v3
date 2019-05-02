import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import '../App.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const styles = {
  disable: {
    display: 'none',
  },
  navStyle: {
    width: '100vw',
    userSelect: 'none'
  }
}

const NavBar = (props) => {
  const { classes } = props
  return(
    <div className={`navbar-fixed ${classes.navStyle}`}>
      <nav className={classes.navStyle}>
        <div className="nav-wrapper black">
          <span className="brand-logo center">{props.title}</span>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><NavLink to="/" activeClassName={classes.disable} exact>Home</NavLink></li>
            <li><a href="/#about">About Me</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
