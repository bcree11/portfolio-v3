import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export default (props) => (
  <div className='navbar-fixed'>
    <nav>
      <div className="nav-wrapper black">
        <Link to="/" className="brand-logo center">{props.title}</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#aboutMe">About Me</Link></li>
          <li><Link to="badges.html">Skills</Link></li>
          <li><Link to="collapsible.html">Portfolio</Link></li>
          <li><Link to="collapsible.html">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
)
