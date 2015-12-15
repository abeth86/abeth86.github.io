import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/base'

export const Navbar = React.createClass({
  mixins: [PureRenderMixin],

  _setSelected: function(e) {
    const selected = e.target.innerText === 'Andrew Bethel' ? 'Home' : e.target.innerText
    this.props.setSelected(selected)
  },

  render: function() {
    const style = {
      selected: {
        borderBottom: '2px solid black'
      },
      notOpaque: {
        opacity: '0.6'
      },
      fontOverOpacity: {
        color: 'black'
      }
    }

    const homeSelected = (this.props.selected === "Home" ? style.selected : null)
    const aboutSelected = (this.props.selected === "About" ? style.selected : null)
    const selectionOpacity = (this.props.selected === "About" ? style.notOpaque : null)
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
                <a href="#/" style={Object.assign({}, homeSelected, ifOpacityPresent)} onClick={this._setSelected}>Home</a>
              </li>
              <li>
                <a href="#/about" style={Object.assign({}, aboutSelected, ifOpacityPresent)} onClick={this._setSelected}>About</a>
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
