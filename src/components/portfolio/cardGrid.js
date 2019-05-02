import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import moon from './images/Moon.png'
import sun from './images/Sun.png'
import {
  colorBox,
  lightSwitch,
  treasure,
  tictactoe,
  tech_talk,
  portfolio,
  batter,
  tool,
  discrete,
  memory,
} from './store'

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
    sunAndMoon: moon,
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
    sunAndMoon = lightCounter%2 !== 0 ? moon : sun
    this.setState({sunAndMoon: sunAndMoon, lightCounter: lightCounter+1})
  }

  render(){
    const { classes } = this.props
    const { colorCounter, colors, sunAndMoon } = this.state
    const portfolio_cards = [
      {id: 0, project: discrete},
      {id: 1, project: tool},
      {id: 2, project: memory},
      {id: 3, project: batter},
      {id: 4, project: portfolio},
      {id: 5, project: tech_talk},
      {id: 6, project: tictactoe},
      {id: 7, project: treasure},
      {id: 8, project: lightSwitch, image: sunAndMoon, onChange: this.SunChange},
      {id: 9, project: colorBox, colors: colors[colorCounter].code, onChange: this.colorBox},
    ]
    return(
      <section className={`${classes.root} card-grid`}>
        {portfolio_cards.map(card =>
          <PortCard key={card.id}
            card_info={card.project}
            image={card.image}
            colors={card.colors}
            onChange={card.onChange}
          />
        )}
      </section>
    )
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardGrid)
