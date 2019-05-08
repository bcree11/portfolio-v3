import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import resume from '../static/resume.pdf'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  list: {
    width: '100%',
    maxWidth: 175,
    marginBottom: 40,
  },
  hrefLink: {
    color: 'inherit',
  },
  name: {
    marginTop: 40,
    color: 'black',
    textAlign: 'center',
  },
  icon: {
    fontSize: 20,
    color: 'black',
  },
  title: {
    margin: 0,
    textTransform: 'capitalize',
  }
})

const ContactList = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <h3 className={classes.name}>Brandon Cree</h3>
      <List
        component="div"
        className={classes.list}
      >
        <ListItem
          button
          component='a'
          href='https://www.linkedin.com/in/bcree'
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon className={classes.icon}>
            <i className="zmdi zmdi-linkedin"></i>
          </ListItemIcon>
          <ListItemText disableTypography primary={
            <h6 className={classes.title}>LinkedIn</h6>
            }
          />
        </ListItem>
        <ListItem
          button
          component='a'
          href='https://github.com/bcree11'
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon className={classes.icon}>
            <i className="zmdi zmdi-github-alt"></i>
          </ListItemIcon>
          <ListItemText primary={
            <h6 className={classes.title}>Github</h6>
            }
          />
        </ListItem>
        <ListItem
          button
          component='a'
          href='mailto:b.marcus.cree@gmail.com'
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon className={classes.icon}>
            <i className="zmdi zmdi-email"></i>
          </ListItemIcon>
          <ListItemText disableTypography primary={
            <h6 className={classes.title}>Email</h6>
            }
          />
        </ListItem>
        <ListItem
          button
          component='a'
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon className={classes.icon}>
            <i className="zmdi zmdi-file-text"></i>
          </ListItemIcon>
          <ListItemText disableTypography primary={
            <h6 className={classes.title}>Resume</h6>
            }
          />
        </ListItem>
      </List>
    </div>
  )
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactList)
