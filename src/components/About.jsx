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
          <div className="col-xs-12 col-md-8 col-md-offset-2 s-about-body">
            <p>I'm a talented programmer with an increasingly diverse skillset. I've worked with applications built on a number of different stacks, and I am familiar with many of the modern libraries used in web development.  These days I primarily use javascript to develop web applications.</p>
            <p>Feel free to find me through any of the social media links below, and don't forget to peruse my github repositories!  Some are older, some are newer, and there's a number of different tech stacks being used.  Read more about how this particular page came to be <a href="https://medium.com/@abeth86/building-out-my-github-page-343f0434da95#.ot8ga8xao">here</a>.</p>
          </div>
          <div className="col-xs-12 col-md-8 col-md-offset-2 s-about-body">
            <ul className="social-media">
              <li>
                <a href="http://github.com/abeth86">
                  <i className="fa fa-github-alt"></i>
                </a>
              </li>
              <li>
                <a href="http://www.google.com/+AndrewBethel1986">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com/in/abethel86">
                  <i className="fa fa-linkedin fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {}
}

export const AboutContainer = connect(mapStateToProps, actionCreators)(About)
