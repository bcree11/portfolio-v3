import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/header'
import AboutMe from '../components/about'
import CardGrid from '../components/portfolio/cardGrid'
import Skills from '../components/skills/skills.js'

import {
  languages,
  databases,
  frameworks,
  otherSkills,
  testing
} from '../components/skills/store.js'

const styles = {
  container: {
    marginBottom: '40px'
  },
  masonryCont: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-35rem',
  },
  masonryHome: {
    maxHeight: '120rem',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  masonryBrickLeft: {
    margin:' 0 3rem 3rem 0',
    width: '35rem',
  },
  masonryBrickRight: {
    margin:' 0 3rem 3rem 0',
    width: '35rem',
  },
  header: {
    backgroundColor: '#2e8af7',
    fontSize: '4rem',
    padding: '3rem',
    marginBottom: '8rem',
  },
  title: {
    borderBottom: '6px solid black',
    lineHeight: '4.5rem',
    display: 'inline-block',
    margin: 0,
  }
}

class Home extends React.Component{
  state = {
    light: 'Off',
    backgroundColor: '',
  }

  lightSwitch = () => {
    let {light, backgroundColor} = this.state
    light = light === 'Off' ? 'On' : 'Off'
    backgroundColor = light === 'Off' ? '#35364a' : '#2EB5E5'
    this.setState({light: light, backgroundColor: backgroundColor})
  }

  resetLightSwitch = () => {
    this.setState({ backgroundColor: 'inherit'})
  }

  lightTimer = () => {
    if(!this.timerId){
      this.timerId = setInterval(()=>{
        this.resetLightSwitch()
      }, 3000);
    }
  }

   sectionTitle = ( title ) => {
    const { classes } = this.props
    return(
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
    </header>)
  }

  render(){
    const { classes } = this.props
    return(
      <main>
        <Grid
          container
          justify="center"
          style={{backgroundColor: this.state.backgroundColor}}
        >
          <Grid className={classes.container} item xs={12}>
            <Header/>
            {this.sectionTitle('About Me')}
          </Grid>
          <Grid className={classes.container} item xs={8}>
            <AboutMe/>
          </Grid>
          <Grid className={classes.container} item xs={12}>
            {this.sectionTitle('Technology')}
            <div className={classes.masonryCont}>
              <div className={classes.masonryHome}>
                <div className={classes.masonryBrickLeft}>
                  <Skills
                    skills={languages}
                    skillsTitle='Languages'
                  />
                </div>
                <div className={classes.masonryBrickLeft}>
                  <Skills
                    skills={otherSkills}
                    skillsTitle='Other Skills'
                  />
                </div>
                <div className={classes.masonryBrickRight}>
                  <Skills
                    skills={frameworks}
                    skillsTitle='Frameworks'
                  />
                </div>
                <div className={classes.masonryBrickRight}>
                  <Skills
                    skills={databases}
                    skillsTitle='Databases'
                  />
                </div>
                <div className={classes.masonryBrickRight}>
                  <Skills
                    skills={testing}
                    skillsTitle='Testing'
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.container} item xs={12}>
            {this.sectionTitle('Portfolio')}
            <CardGrid
              lightSwitch={this.lightSwitch}
              resetLightSwitch={this.resetLightSwitch}
              lightTimer={this.lightTimer}
            />
          </Grid>
        </Grid>
      </main>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
