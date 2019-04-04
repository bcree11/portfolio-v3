import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import PortCard from './card'

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 20rem)',
    justifyContent: 'center',
    gridGap: '3rem'
  },
})

class CardGrid extends React.Component{
  state = {
    colorCounter: 0,
    lightCounter: 0,
    sunAndMoon: './images/Moon.png',
    colors: [
      {word:'Yellow',code:'#f7e51b',font:'#000000'},
      {word:'Blue',code:'#1260ce', font:'#FFFFFF'},
      {word:'Orange',code:'#db6606', font:'#000000'},
      {word:"Bianchi Blue",code:'#1df7f0', font:'#000000'},
      {word:'Red',code:'#ba1024', font:'#000000'},
      {word:'Black',code:'#000000', font:'#FFFFFF'}
    ],
  }

  colorBox = () => {
    let {colors, colorCounter} = this.state
    if(colorCounter < colors.length - 1){
      colorCounter += 1
    } else {
      colorCounter = 0
    }
    this.setState({colorCounter: colorCounter})
  }

  SunChange = () => {
    let {sunAndMoon, lightCounter} = this.state
    const {lightSwitch, lightTimer}=this.props
    lightSwitch()
    lightTimer()
    sunAndMoon = lightCounter%2 !== 0 ? "./images/Moon.png" : "./images/Sun.png"
    this.setState({sunAndMoon: sunAndMoon, lightCounter: lightCounter+1})
  }

  render(){
    const { classes } = this.props
    const { colorCounter, colors, sunAndMoon } = this.state
    return(
      <section className={classes.root}>
        <PortCard
          title='Color Box'
          colors={colors[colorCounter].code}
          onChange={this.colorBox}
        />
        <PortCard
          title='Light Switch'
          image={sunAndMoon}
          onChange={this.SunChange}
        />
        <PortCard
          title='Treasure Hunt'
          image='../images/hunt.png'
          link='/christmas-present-hunt'
          linkText='Play'
        />
        <PortCard
          title='Tic Tac Toe'
          image='../images/tictactoe.png'
          link='/tic-tac-toe'
          linkText='Play'
        />
        <PortCard
          title='Tech Talk'
          image='../images/responsive.png'
          imageSize='contain'
          link='/tech-talk'
          linkText='Link'
        />
        <PortCard
          title='Portfolio'
          image='../images/BrandonCree.png'
          link='https://github.com/bcree11/portfolio-v3'
          linkText='Version 3 Github'
        />
        <PortCard
          title='Batter Up!'
          image='../images/BatterUp.png'
          link='https://devpost.com/software/batter-up-yudmpt'
          linkText='Devpost'
        />
        <PortCard
          title='ToolShare'
          image=''
          link='https://devpost.com/software/batter-up-yudmpt'
          linkText='Link'
        />
        <PortCard
          title='Discrete Chill'
          image=''
        />
      </section>
    )
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardGrid)
