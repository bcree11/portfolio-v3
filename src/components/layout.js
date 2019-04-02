import React from 'react'
import NavBar from './navbar'
import Footer from './footer'

export default (props) => (
  <div>
    <NavBar/>
      {props.children}
    <Footer/>
  </div>
)
