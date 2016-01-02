import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/base'

export const Navbar = React.createClass({
  mixins: [PureRenderMixin],

  componentWillMount: function() {
    const selected = this.props.location === '/' ? 'home' : this.props.location.replace('/', '')
    this.props.setSelected(selected)
  },

  _setSelected: function(e) {
    console.log(e.target.id)
    const selected = e.target.innerText === 'Andrew Bethel' ? 'home' : e.target.id
    this.props.setSelected(selected)
  },

  render: function() {
    const style = {
      selected: {
        borderBottom: '2px solid black',
        color: 'red'
      },
      notOpaque: {
        opacity: '0.6'
      },
      fontOverOpacity: {
        color: 'black'
      }
    }

    const homeSelected = (this.props.selected === "home" ? style.selected : null)
    const aboutSelected = (this.props.selected === "about" ? style.selected : null)
    const portfolioSelected = (this.props.selected === "portfolio" ? style.selected : null)
    const selectionOpacity = (this.props.selected === "about" ? style.notOpaque : null)
    const ifOpacityPresent = (selectionOpacity ? style.fontOverOpacity : null)

    return (
      <nav className="navbar navbar-color" style={selectionOpacity} role="navigation">
        <div className="container">
          <a className="navbar-brand" href="#/" onClick={this._setSelected}>Andrew Bethel</a>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a id="home" href="#/" style={Object.assign({}, homeSelected, ifOpacityPresent)} onClick={this._setSelected}>Home</a>
              </li>
              <li>
                <a id="about" href="#/about" style={Object.assign({}, aboutSelected, ifOpacityPresent)} onClick={this._setSelected}>About</a>
              </li>
              <li>
                <a id="portfolio" href="#/portfolio" style={Object.assign({}, portfolioSelected, ifOpacityPresent)} onClick={this._setSelected}>Portfolio</a>
              </li>
              <li>
                <a id="resume" href="http://abethel.blob.core.windows.net/resume/my_resume.pdf" style={Object.assign({}, ifOpacityPresent)}>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

function mapStateToProps(state) {
  return {
    selected: state.get('selected')
  }
}

export const NavbarContainer = connect(mapStateToProps, actionCreators)(Navbar)
