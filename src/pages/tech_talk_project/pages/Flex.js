import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import TechNav from '../tech_talk'

export default class Flex extends Component {
  render(){
    return(
      <TechNav>
        <h1>Display: Flex</h1>
        <hr/>
        <MediaQuery minDeviceWidth={700}>
          <h3>Desktop Mode, the top div is 90vw+, while smaller divs are 30vw</h3>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={699}>
          <h5>Mobile Mode, now top div is 90vw, while smaller divs are 60vw</h5>
          <h6>Changed 'flex-direction: row' into 'flex-direction: column' to make it readable in mobile</h6>
        </MediaQuery>
        <div className="flex-container">
          <div className='flex1'></div>
        </div>
        <div className="flex-container">
          <div className='flex2'></div>
          <div className='flex2'></div>
          <div className='flex2'></div>
        </div>
        <br/>
        <h3>Using 'flex: X%' and added 'flex-direction: column' to make it readable in mobile</h3>
        <div className="flex-container2">
          <div className='flex5'></div>
        </div>
        <div className="flex-container2">
          <div className='flex3'></div>
          <div className='flex4'></div>
        </div>
      </TechNav>
    )
  }
}
