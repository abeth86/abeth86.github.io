import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {TransitionMixin} from './mixins/TransitionMixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {Col, Modal} from 'react-bootstrap'

export const Portfolio = React.createClass({
  mixins: [PureRenderMixin, TransitionMixin],
  propTypes: {
    openModal: React.PropTypes.func,
    closeModal: React.PropTypes.func,
    openedModal: React.PropTypes.string,
    transition: React.PropTypes.bool
  },

  _openModal (e) {
    this.props.openModal(e.target.id)
  },
  _closeModal () {
    this.props.closeModal()
  },

  render () {
    const transitionClass = this.props.transition ? 'component-loaded' : null

    const wurlModal = (
      <Modal className='portfolio-modal' show={this.props.openedModal === 'wurl'} onHide={this._closeModal}>
        <Modal.Header closeButton>
          <Modal.Title><img className='modal-img-long' src='/img/wurl-desc.png'/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='s-portfolio-icons'>
            <img className='skill-icon' src='/img/html5-min.png' />
            <img className='skill-icon' src='/img/css3-min.png' />
            <img className='skill-icon' src='/img/asp-net.png' />
            <img className='skill-icon' src='/img/angularjs-min.png' />
          </div>
          <h4>All Aboard!</h4>
          <p>Wurl is a prototype event finder for travelers in a foreign land.  It was built in just over a week, and remains hosted as an example of a rapidly produced, truly full-stack application.  Feel free to <a href='http://www.getwurl.com'>play with it</a>, and run through the code <a href='http://github.com/abeth86/wurl'>here</a>!</p>
        </Modal.Body>
      </Modal>
    )
    const chimgurModal = (
      <Modal className='portfolio-modal' show={this.props.openedModal === 'chimgur'} onHide={this._closeModal}>
        <Modal.Header closeButton>
          <Modal.Title><img className='modal-img-long' src='/img/chimgur-desc.png'/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='s-portfolio-icons'>
            <img className='skill-icon' src='/img/html5-min.png' />
            <img className='skill-icon' src='/img/less-min.png' />
            <img className='skill-icon' src='/img/reactjs-min.png' />
            <img className='skill-icon' src='/img/nodejs-min.png' />
          </div>
          <h4>GFW-Free Image Uploader</h4>
          <p>Chimgur was the brainchild of endless tomfoolery by the Chinese GFW when attempting to use Imgur.  It's a simple image uploader that was built specifically for the subreddit /r/China on <a href='http://www.reddit.com'>Reddit</a>.  Anyone can use it, however, as long as you have a Reddit username.  Check it out <a href='http://chimgur.azurewebsites.net'>here</a>! (Running beta/UAT-style version <a href='http://chimgur.herokuapp.com'>here</a>)</p>
        </Modal.Body>
      </Modal>
    )

    return (
      <div className={'s-about-portfolio ' + transitionClass}>
        <div className='container'>
          <h3 className='s-about-portfolio-title'>Examples</h3>
          <Col xs={12} md={6} className='s-about-portfolio-piece'>
            <img id='wurl' onClick={this._openModal} className='s-about-portfolio-img' src='/img/wurl-pic.jpg' />
            <h4>Wurl</h4>
            <h6>Expat Event Finder</h6>
          </Col>
          <Col xs={12} md={6} className='s-about-portfolio-piece'>
            <img id='chimgur' onClick={this._openModal} className='s-about-portfolio-img' src='/img/chimgur-pic.png' />
            <h4>Chimgur</h4>
            <h6>Simple Image Uploader for China</h6>
          </Col>
          {wurlModal}
          {chimgurModal}
        </div>
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    openedModal: state.get('openedModal'),
    transition: state.get('transition')
  }
}

export const PortfolioContainer = connect(mapStateToProps, actionCreators)(Portfolio)
