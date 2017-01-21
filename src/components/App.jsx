import React from 'react'
import {NavbarContainer} from './Navbar'

export default class App extends React.Component {
  static propTypes = {
    location: React.PropTypes.object,
    children: React.PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavbarContainer location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
}
