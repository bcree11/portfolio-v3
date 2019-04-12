import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import '../tech_talk.css'
import TechNav from '../tech_talk'

export default class Grid extends Component {
  render(){
    return(
      <TechNav>
        <h1>Display: Grid</h1>
        <hr/>
        <MediaQuery minDeviceWidth={769}>
          <div>
            <h3>Desktop Mode</h3>
            <h5>grid-template-columns: repeat(4, 20vw); grid-template-rows: repeat(2, 40vh)</h5>
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <div>
            <h3>Mobile Mode</h3>
            <h5>grid-template-columns: repeat(2, 40vw); grid-template-rows: repeat(2, 20vh)</h5>
          </div>
        </MediaQuery>
        <h5>Example: Cards</h5>
        <div className="displayGrid">
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
          <div className="gridBox"></div>
        </div>
      </TechNav>
    )
  }
}

// <div className="twoColumnGrid">
// <div className="gridBox"></div>
// <div className="gridBox"></div>
// </div>
