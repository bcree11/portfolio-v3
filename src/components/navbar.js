import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export default (props) => (
  <div class="navbar-fixed" style={navStyle}>
    <nav style={navStyle}>
      <div className="nav-wrapper black">
        <span className="brand-logo center">{props.title}</span>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#about">About Me</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
        </ul>
      </div>
    </nav>
  </div>
)

const navStyle = {
  width: '100vw'
}
