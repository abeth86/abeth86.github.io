import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/about'

export const About = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="s-about">
        <div className="about-top-img"></div>
        <div className="container">
          <div className="img-circle about-mugshot"></div>
          <div className="s-about-title">About Me</div>
        </div>
        <div className="container">
          <div className="col-xs-4"></div>
          <div className="col-xs-8"></div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {}
}

export const AboutContainer = connect(mapStateToProps, actionCreators)(About)
