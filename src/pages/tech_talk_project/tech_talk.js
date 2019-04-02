import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './tech_talk.css'

class TechNav extends Component {
  render() {
    return (
      <div className="TechTalk" style={{textAlign: 'center'}}>
        <nav>
          <Link to='/tech-talk/'>Home</Link>{' | '}
          <Link to='/tech-talk/mediaquery'>Media Query</Link> {' | '}
          <Link to='/tech-talk/flex'>Flex</Link> {' | '}
          <Link to='/tech-talk/grid'>Grid</Link> {' | '}
          <Link to='/tech-talk/background'>Background</Link>
        </nav>
          {this.props.children}
      </div>
    )
  }
}

export default TechNav
