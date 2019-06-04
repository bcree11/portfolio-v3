import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/header'
import AboutMe from '../components/about/about'
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
    marginBottom: '8rem'
  },
  masonryCont: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-30rem',
  },
  masonryHome: {
    maxHeight: '120rem',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  masonryBrickLeft: {
    margin:' 0 3rem 3rem 0',
    width: '30rem',
  },
  masonryBrickRight: {
    margin:' 0 3rem 3rem 0',
    width: '30rem',
  },
  subheader: {
    backgroundColor: '#2e8af7',
    padding: '3rem',
    marginBottom: '8rem',
    paddingTop: '64px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: '0 0 20px',
    display: 'inline-block',
  },
  border: {
    borderBottom: '6px solid black',
    display: 'inline-block',
  },
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

   sectionTitle = ( title, headerId ) => {
    const { classes } = this.props
    return(
    <header className={`${classes.subheader} align-header`} id={headerId}>
      <div className={classes.border}>
      <h1 className={`${classes.title} hide-on-small-only`}>{title}</h1>
      <h3 className={`${classes.title} border-control show-on-small hide-on-med-and-up`}>{title}</h3>
      </div>
    </header>)
  }

  render(){
    const { classes } = this.props
    return(
      <main id='home'>
        <Grid
          container
          justify="center"
          style={{backgroundColor: this.state.backgroundColor}}
        >
          <Grid item xs={12}>
            <Header/>
            {this.sectionTitle('About Me', 'about')}
          </Grid>
          <Grid className={classes.container} item xs={8}>
            <AboutMe/>
          </Grid>
          <Grid className={classes.container} item xs={12}>
            {this.sectionTitle('Technology', 'skills')}
            <div className={`${classes.masonryCont} masonry-cont`}>
              <div className={`${classes.masonryHome} masonry-home`}>
                <div className={`${classes.masonryBrickLeft} masonry-brick-left`}>
                  <Skills
                    skills={languages}
                    skillsTitle='Languages'
                  />
                </div>
                <div className={`${classes.masonryBrickLeft} masonry-brick-left`}>
                  <Skills
                    skills={otherSkills}
                    skillsTitle='Other Skills'
                  />
                </div>
                <div className={`${classes.masonryBrickRight} masonry-brick-right`}>
                  <Skills
                    skills={frameworks}
                    skillsTitle='Frameworks & Libraries'
                    expressLogo={classes.expressLogo}
                  />
                </div>
                <div className={`${classes.masonryBrickRight} masonry-brick-right`}>
                  <Skills
                    skills={databases}
                    skillsTitle='Databases'
                  />
                </div>
                <div className={`${classes.masonryBrickRight} masonry-brick-right`}>
                  <Skills
                    skills={testing}
                    skillsTitle='Testing'
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.container} item xs={12}>
            {this.sectionTitle('Portfolio', 'portfolio')}
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
