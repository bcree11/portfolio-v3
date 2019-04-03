import React from 'react'

import PortCard from './card'

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
    let {colorCounter, colors, sunAndMoon} = this.state
    console.log('color', colors);
    console.log('count', colorCounter);
    return(
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default CardGrid
