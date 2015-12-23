import React from 'react'
import $ from 'jquery'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/home'

export const Home = React.createClass({
  mixins: [PureRenderMixin],

  componentDidMount: function() {
    console.log(this.props.transition)
    setTimeout(() => {
      this.props.startTransition(true)
    }, 100)
  },
  componentWillUnmount: function() {
    this.props.startTransition(false)
  },
  componentDidUpdate: function() {
    console.log(this.props.transition)
  },

  render: function() {
    const titleGridClass = 'col-xs-8 col-md-6 col-xs-offset-2 col-md-offset-3 s-home-title'
    const iconsGridClass = 'col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 s-home-icons'
    const wideGridClass= 'col-xs-6 col-md-4 '
    const wideOffset = 'col-xs-offset-3 col-md-offset-2 '
    const transitionClass = this.props.transition ? "component-loaded" : null

    return (
      <div className={"s-home " + transitionClass}>
        <div className="container">
          <div className="row">
            <div className={titleGridClass}>abethel.io</div>
            <div className={iconsGridClass}>
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
  return {
    transition: state.get('transition')
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home)
