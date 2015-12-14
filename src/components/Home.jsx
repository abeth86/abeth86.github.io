import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/home'

export const Home = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="s-home">
        <div className="container">
          <div className="col-xs-6 col-md-6 col-xs-offset-3 col-md-offset-3 s-home-title">abethel.io</div>
          <div className="col-xs-6 col-md-6 col-xs-offset-3 col-md-offset-3 s-home-icons">
            <img className="skill-icon" src="/img/html5-min.png" />
            <img className="skill-icon" src="/img/css3-min.png" />
            <img className="skill-icon" src="/img/less-min.png" />
            <img className="skill-icon" src="/img/es6-min.png" />
            <img className="skill-icon" src="/img/reactjs-min.png" />
            <img className="skill-icon" src="/img/angularjs-min.png" />
            <img className="skill-icon" src="/img/nodejs-min.png" />
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {}
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home)
