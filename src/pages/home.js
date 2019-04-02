import React from 'react'
import Grid from '@material-ui/core/Grid'

import Header from '../components/header'
import AboutMe from '../components/about'
import CardGrid from '../components/cardGrid'

export default class Home extends React.Component{
  state = {
    light: 'Off',
    backgroundColor: '#35364a',
  }

  lightSwitch = () => {
    let {light, backgroundColor} = this.state
    light = light === 'Off' ? 'On' : 'Off'
    backgroundColor = light === 'Off' ? '#35364a' : '#2EB5E5'
    this.setState({light: light, backgroundColor: backgroundColor})
  }

  render(){
    return(
      <React.Fragment>
        <Grid
          container
          justify="center"
        >
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={8}>
            <AboutMe/>
          </Grid>
          <Grid item xs={8}>
            <CardGrid lightSwitch={this.lightSwitch}/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
