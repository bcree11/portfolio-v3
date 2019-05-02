import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
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
  skillsLogos: {
    height: '3rem'
  },
  title: {
    display: 'flex'
  },
  expressLogo: {
    height: '1.5rem',
    verticalAlign: '-1.5rem',
  },
})

const SkillsTable = (props) => {
  console.log('express', props.expressLogo);
  return(
    <React.Fragment>
      {props.skills &&
        props.skills.map((skill, index) => (
          <tr key={skill.id}>
            <td className={props.skillsTable}>
              <Typography component="p">{'{ '}name:</Typography>
            </td>
            <td className={props.skillsTable}>
              <Typography component="h6">{skill.name}</Typography>
            </td>
            <td className={props.skillsTable}>
              <Typography component="p">logo:</Typography>
            </td>
            <td className={`${props.skillsTable} center`}>
              <img className={skill.check ? props.expressLogo: props.skillsLogos} src={skill.logo} alt={skill.name}/>
            </td>
            <td className={props.skillsTable}>
              <Typography component="p">{' }'} ,</Typography>
            </td>
          </tr>
      ))}
    </React.Fragment>
  )
}
const Skills = (props) => {
  const { classes, skills, skillsTitle } = props
  return(
    <section className={classes.root}>
      <Paper className={classes.paper} elevation={6} square={true}>
        <h3 className={classes.title}>{skillsTitle} ={' ['}</h3>
        <table className="striped responsive-table">
          <tbody>
            <SkillsTable
              skillsLogos={classes.skillsLogos}
              skillsTable={classes.table}
              skills={skills}
              expressLogo={classes.expressLogo}
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
