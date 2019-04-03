import React from 'react'
import NavBar from './navbar'
import Footer from './footer'

export default class Layout extends React.Component{
  state = {
    pageWindow: window,
    checkScroll: null,
    title: 'b.marcus.cree@gmail.com',
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let {pageWindow, checkScroll}=this.state
    let before = checkScroll
    this.setState({checkScroll: pageWindow.scrollY})
    if(before < this.state.checkScroll){
      this.setState({title: 'b.marcus.cree@gmail.com'})
    } else {
      this.setState({title: 'BRANDON CREE'})
    }
  }
  render(){
    return (
      <div>
        <NavBar title={this.state.title}/>
          {this.props.children}
        <Footer/>
      </div>
    )
  }
}
