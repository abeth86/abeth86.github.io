import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {TransitionMixin} from './mixins/TransitionMixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {Col} from 'react-bootstrap'

export class Home extends React.Component {
  static propTypes = {
    icons: React.PropTypes.array,
    transition: React.PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.startTransition(true)
    }, 100)
  }
  componentWillUnmount() {
    this.props.startTransition(false)
  }

  render() {
    const icons = this.props.icons.map((icon, index) => {
      return (
        <img className='skill-icon' src={icon} key={'icon-' + index} />
      )
    })
    const transitionClass = this.props.transition ? 'component-loaded' : null

    return (
      <div className={'s-home ' + transitionClass}>
        <div className='container'>
          <div className='row'>
            <Col className='s-home-title' xs={8} md={6} xsOffset={2} mdOffset={3}>
              awitherspoon.io
            </Col>
            <Col className='s-home-icons' xs={10} md={6} xsOffset={1} mdOffset={3}>
              {icons}
            </Col>
          </div>
        </div>
        <div className='row'>
          <Col className='s-home-body' xs={10} md={4} xsOffset={1} mdOffset={2}>
            <h3 className='body-title'>While You're Here</h3>
            <p className='body-text'>Be sure to check out some of the projects on my github to get a feel for how I write code.  Read up about me in the about section.  If you find a project you'd like to contribute to, don't be bashful - make that pr!</p>
          </Col>
          <Col className='s-home-body' xs={10} md={4} xsOffset={1} mdOffset={0}>
            <h3 className='body-title'>Why Javascript?</h3>
            <p className='body-text'>The icons are certainly loaded full of JS, and for good reason: I love it.  My wife would be upset if she found out, though, so maybe let's keep that between you and me.  Yeah?</p>
          </Col>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    transition: state.get('transition'),
    icons: state.get('icons')
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home)
