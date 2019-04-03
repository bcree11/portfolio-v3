import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import { languages } from './store.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  table: {
    border: 'none!important',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    width: 300,
    marginBottom: '40px'
  },
  media: {
    height: 300,
  },
  skillsLogos: {
    height: '3rem'
  },
  title: {
    display: 'flex'
  }
})

const SkillsArrObject = (props) => (
  <div className={props.skillsBlock}>
    {languages.map((languages, index) => (
      <div key={languages.id} className={props.skillsObject}>
        <div className={props.skillsObject}>
          <h6>{'{ '}name:</h6>
        </div>
        <div className={props.skillsObject}>
        <h5>{languages.name}</h5>
      </div>
        <div className={props.skillsObject}>
          <h6>logo:</h6>
        </div>
        <div className={props.skillsObject}>
          <img className={props.skillsLogos} src={languages.logo} alt={languages.name}/>
        </div>
        <div className={props.skillsObject}>
          <h6>{' }'} ,</h6>
        </div>
      </div>
    ))}
  </div>
)

const SkillsTable = (props) => (
  <table className={"striped"}>
    <tbody>
    {languages.map((languages, index) => (
      <tr key={languages.id} className={props.skillsObject}>
        <td className={props.skillsTable}>
          <h6>{'{ '}name:</h6>
        </td>
        <td className={props.skillsTable}>
        <h5>{languages.name}</h5>
      </td>
        <td className={props.skillsTable}>
          <h6>logo:</h6>
        </td>
        <td className={props.skillsTable}>
          <img className={props.skillsLogos} src={languages.logo} alt={languages.name}/>
        </td>
        <td className={props.skillsTable}>
          <h6>{' }'} ,</h6>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
)

const Skills = (props) => {
  const { classes } = props
  return(
    <section className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <h3 className={classes.title}>Languages ={' ['}</h3>
        <SkillsTable
          skillsLogos={classes.skillsLogos}
          skillsTable={classes.table}
        />
        <h3 className={classes.title}>{ ']'}</h3>
      </Paper>
    </section>
  )
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)
