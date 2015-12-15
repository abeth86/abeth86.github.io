import React from 'react'
import {NavbarContainer} from './Navbar'

export default React.createClass({
  render: function() {
    return (
      <div>
        <NavbarContainer location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
})
