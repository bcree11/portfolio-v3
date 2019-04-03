import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/header'
import AboutMe from '../components/about'
import CardGrid from '../components/cardGrid'
import Skills from '../components/skills/skills.js'

const styles = {
  container: {
    marginBottom: '40px'
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

  render(){
    const { classes } = this.props
    return(
      <React.Fragment>
        <Grid
          container
          justify="center"
          style={{backgroundColor: this.state.backgroundColor}}
        >
          <Grid className={classes.container} item xs={12}>
            <Header/>
          </Grid>
          <Grid className={classes.container} item xs={8}>
            <AboutMe/>
          </Grid>
          <Grid className={classes.container} item xs={8}>
            <CardGrid
              lightSwitch={this.lightSwitch}
              resetLightSwitch={this.resetLightSwitch}
              lightTimer={this.lightTimer}
            />
          </Grid>
          <Grid className={classes.container} item xs={5}>
            <Skills/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
