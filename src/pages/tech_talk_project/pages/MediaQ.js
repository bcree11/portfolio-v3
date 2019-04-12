import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import '../tech_talk.css'
import TechNav from '../tech_talk'

import desktop from "../imgs/desktop.jpg"
import warcraft from "../imgs/warcraft.gif"
import gaming from "../imgs/gaming.jpg"
import ipad from "../imgs/ipad.png"
import iphone from "../imgs/iPhone.png"
import portrait from "../imgs/portrait.png"
import landscape from "../imgs/landscape.png"

export default class MediaQ extends Component {
  render(){
    return(
      <TechNav>
        <h1>Media Query</h1>
        <hr/>
        <div>
          <h2 style={{borderBottom: '4px solid black', display: 'inline-block'}}>Device Test!</h2>
          <MediaQuery minDeviceWidth={769}>
            <div>
              <h3>Desktop Mode</h3>
              <img alt='Desktop Mode' src={desktop} height='300px'/>
            </div>
            <MediaQuery minDeviceWidth={1824}>
              <h5 style={{color: 'red'}}>You also have a huge screen</h5>
              <img alt='South Park Warcraft Gamer' src={warcraft} height='300px'/>
              <br/>
              <img alt='Really Wide screen' src={gaming} height='300px'/>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <h5 style={{color: 'red'}}>Your browser is sized like a tablet or mobile phone though</h5>
            </MediaQuery>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481} maxDeviceWidth={768}>
            <div>
              <h3>Tablet Mode</h3>
              <img alt='Tablet Mode' src={ipad} height='300px'/>
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
            <div>
              <h3>Mobile Mode</h3>
              <img alt='Mobile Mode' src={iphone} height='300px'/>
            </div>
          </MediaQuery>
          <MediaQuery orientation="portrait">
            <div>
              <h5>Your screen is sized to portrait mode</h5>
              <img alt='Portrait Orientation' src={portrait}/>
            </div>
          </MediaQuery>
          <MediaQuery orientation="landscape">
            <div>
              <h5>Your screen is sized to landscape mode</h5>
              <img alt='Landscape Orientation' src={landscape}/>
            </div>
          </MediaQuery>
        </div>
      </TechNav>
    )
  }
}
