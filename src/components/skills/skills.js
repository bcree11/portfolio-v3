import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

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
    fontWeight: 'bold'
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

const SkillsTable = (props) => (
  <React.Fragment>
    { props.skills &&
        props.skills.map((skill, index) => (
          <tr key={skill.id} className={props.skillsObject}>
            <td className={props.skillsTable}>
              <p>{'{ '}name:</p>
            </td>
            <td className={props.skillsTable}>
              <h6>{skill.name}</h6>
            </td>
            <td className={props.skillsTable}>
              <p>logo:</p>
            </td>
            <td className={`${props.skillsTable} right`}>
              <img className={props.skillsLogos} src={skill.logo} alt={skill.name}/>
            </td>
            <td className={props.skillsTable}>
              <p>{' }'} ,</p>
            </td>
          </tr>
    ))}
  </React.Fragment>
)

const Skills = (props) => {
  const { classes, skills, skillsTitle } = props
  return(
    <section className={classes.root}>
      <Paper className={classes.paper} elevation={6} square={true}>
        <h3 className={classes.title}>{skillsTitle} ={' ['}</h3>
        <table className={"striped"}>
          <tbody>
            <SkillsTable
              skillsLogos={classes.skillsLogos}
              skillsTable={classes.table}
              skills={skills}
            />
          </tbody>
        </table>
        <h3 className={classes.title}>{ ']'}</h3>
      </Paper>
    </section>
  )
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)
