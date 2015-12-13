import React from 'react'
import {Navbar} from './Navbar'

export default React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
})
