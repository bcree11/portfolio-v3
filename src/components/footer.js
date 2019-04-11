import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    fontSize: '30px',
    margin: '20px'
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    color: '#ffae1a',
  },
  contact: {
    margin: 0,
    textTransform: 'none'
  },
  footerText: {
    fontSize: '10px',
    padding: '0 10px 0 5px'
  }
});

const Footer = (props) => {
  const { classes } = props
  return (
    <footer id='contact' className={`${classes.footer} page-footer flow-text black`}>
      <h1 className={classes.contact}>Contact Me</h1>
        <ul className={classes.contact}>
          <li>
            <Fab href="mailto:b.marcus.cree@gmail.com" color="primary" aria-label="Email" className={classes.fab}>
              <i className="zmdi zmdi-email"></i>
            </Fab>
          </li>
          <li>
            <Fab href="https://github.com/bcree11" color="primary" aria-label="Github" className={classes.fab}>
              <i className="zmdi zmdi-github-box"></i>
            </Fab>
          </li>
          <li>
            <Fab href="https://www.linkedin.com/in/bcree/" color="primary" aria-label="LinkedIn" className={classes.fab}>
              <i className="zmdi zmdi-linkedin-box"></i>
            </Fab>
          </li>
        </ul>
        <ul className={classes.contact}>
          <li className={classes.footerText}>Copyright © 2019 Brandon Cree</li>
        </ul>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
