import React from 'react'
import '../App.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export default (props) => (
  <div className='navbar-fixed'>
    <nav>
      <div className="nav-wrapper light-blue darken-1">
        <a href="#" className="brand-logo center">{props.title}</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="#aboutMe">About Me</a></li>
          <li><a href="badges.html">Skills</a></li>
          <li><a href="collapsible.html">Portfolio</a></li>
          <li><a href="collapsible.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
)
