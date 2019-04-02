import React, { Component } from 'react'
import TechNav from '../tech_talk'

export default class TechHome extends Component {
  render(){
    return(
      <div>
        <TechNav>
        <h1>Tech Talk</h1>
        <hr/>
        <h1>Contact Info:</h1>
        <br/>
        <div style={{display: 'inline-block'}}>
          <h3>
              <h1>Brandon Cree</h1>
              <h3>b.marcus.cree@gmail.com | https://www.linkedin.com/in/bcree</h3>
              <h3>https://github.com/bcree11</h3>
          </h3>
        </div>
        </TechNav>
      </div>
    )
  }
}
