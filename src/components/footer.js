import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export default (props) => (
  <footer className="page-footer flow-text black" style={footerStyle}>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3 className="white-text">Brandon Cree</h3>
          <p className="white-text text-lighten-4">
            <a style={whiteIconStyle} href="mailto:b.marcus.cree@gmail.com">
              <i className="zmdi zmdi-email"></i> b.marcus.cree@gmail.com{' | '}
            </a>
            <a style={whiteIconStyle} href="https://github.com/bcree11" target="_blank" rel="noopener noreferrer">
              <i className="zmdi zmdi-github-box"></i> github.com/bcree11
            </a>{' | '}
            <a style={whiteIconStyle} href="https://www.linkedin.com/in/bcree/" target="_blank" rel="noopener noreferrer">
              <i className="zmdi zmdi-linkedin-box"></i> linkedin.com/in/bcree
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

const footerStyle = {
  paddingBottom: '20px',
  textAlign: 'center',
}

const whiteIconStyle = {
  color: 'white',
  textTransform: 'none',
}
