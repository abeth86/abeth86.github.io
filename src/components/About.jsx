import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {TransitionMixin} from './mixins/TransitionMixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {WorkHistory} from './WorkHistory'
import {Col} from 'react-bootstrap'
import {GistEmbed} from './GistEmbed'

export const About = React.createClass({
  mixins: [PureRenderMixin, TransitionMixin],
  propTypes: {
    transition: React.PropTypes.bool,
    workHistory: React.PropTypes.array,
    gists: React.PropTypes.array
  },

  render: function () {
    const transitionClass = this.props.transition ? 'component-loaded' : null

    return (
      <div className='s-about'>
        <div className={'about-top-img ' + transitionClass}></div>
        <div className='container'>
          <div className='img-circle about-mugshot'></div>
          <div className='s-about-title'>About Me</div>
        </div>
        <div className='container'>
          <Col xs={12} md={8} mdPush={2} className='s-about-body'>
            <p>I'm a talented programmer with an increasingly diverse skillset. I've worked with applications built on a number of different stacks, and I am familiar with many of the modern libraries used in web development.  These days I primarily use javascript to develop web applications.</p>
            <p>Feel free to find me through any of the social media links below, and don't forget to peruse my github repositories!  Some are older, some are newer, and there's a number of different tech stacks being used.  To see the code behind this website, check out <a href='http://github.com/awitherspoon/awitherspoon.github.io'>the repository</a>!</p>
          </Col>
          <Col xs={12} md={8} mdOffset={2} className='s-about-body'>
            <ul className='social-media'>
              <li>
                <a href='http://github.com/awitherspoon'>
                  <i className='fa fa-github-alt'></i>
                </a>
              </li>
              <li>
                <a href='https://plus.google.com/u/0/111701562505143445889'>
                  <i className='fa fa-google-plus'></i>
                </a>
              </li>
              <li>
                <a href='http://www.linkedin.com/in/awitherspoon86'>
                  <i className='fa fa-linkedin fa-fw'></i>
                </a>
              </li>
            </ul>
          </Col>
        </div>
        <div className='divider'></div>
        <div className='container'>
          <div className='gist-title-container'>
            <div className='s-about-title'>Code Snippets</div>
            <div className='gist-subheader'>I'll let the code speak for itself.</div>
          </div>
            {
              this.props.gists.map((gist, index) => {
                return (<Col xs={12} md={12} className='github-gist' key={index}>
                    <div className='gist-title'>{gist.title}</div>
                    <GistEmbed gist={gist.id} />
                </Col>)
              })
            }
        </div>
        <div className='divider'></div>
        <div className='container'>
          <WorkHistory workHistory={this.props.workHistory} />
        </div>
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    transition: state.get('transition'),
    workHistory: state.get('workHistory'),
    gists: state.get('gists')
  }
}

export const AboutContainer = connect(mapStateToProps, actionCreators)(About)
