import React from 'react'
import {NavbarContainer} from './Navbar'

export default React.createClass({
  propTypes: {
    location: React.PropTypes.object,
    children: React.PropTypes.object
  },

  render: function () {
    return (
      <div>
        <NavbarContainer location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
})
