import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

export const Navbar = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <a className="navbar-brand" href="#/">Andrew Bethel</a>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})
