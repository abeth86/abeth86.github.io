import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/home'

export const Home = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    const narrowGridClass = 'col-xs-6 col-md-6 col-xs-offset-3 col-md-offset-3 '
    const wideGridClass= 'col-xs-6 col-md-4 '
    const wideOffset = 'col-xs-offset-3 col-md-offset-2 '

    return (
      <div className="s-home">
        <div className="container">
          <div className={narrowGridClass + "s-home-title"}>abethel.io</div>
          <div className={narrowGridClass + "s-home-icons"}>
            <img className="skill-icon" src="/img/html5-min.png" />
            <img className="skill-icon" src="/img/css3-min.png" />
            <img className="skill-icon" src="/img/less-min.png" />
            <img className="skill-icon" src="/img/es6-min.png" />
            <img className="skill-icon" src="/img/reactjs-min.png" />
            <img className="skill-icon" src="/img/angularjs-min.png" />
            <img className="skill-icon" src="/img/nodejs-min.png" />
          </div>
        </div>
        <div className="row">
          <div className={wideGridClass + wideOffset + "s-home-body"}>
            <h3 className="body-title">While You're Here</h3>
            <p className="body-text">Be sure to check out some of the projects on my github to get a feel for how I write code.  Read up about me in the about section.  You may even find a neat section about how this site was built!</p>
          </div>
          <div className={wideGridClass + "col-xs-offset-3 col-md-offset-0 s-home-body"}>
            <h3 className="body-title">Why Javascript?</h3>
            <p className="body-text">The icons are certainly loaded full of JS, and for good reason: I love it.  My wife would be upset if she found out, though, so maybe let's keep that between you and me.  Yeah?</p>
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
