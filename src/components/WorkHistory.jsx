import React from 'react'
import {Col} from 'react-bootstrap'

export const WorkHistory = React.createClass({
  propTypes: {
    workHistory: React.PropTypes.array
  },

  render () {
    const previousJobs = this.props.workHistory.map((job, index) => {
      return (
        <div key={'job-history-' + index}>
          <img className='previous-job' src={job} />
          <h6>Strikingly - Front End Engineer</h6>
        </div>
      )
    })

    return (
      <Col className='s-about-history' xs={10} md={6} xsOffset={1} mdOffset={3}>
        <h3>Work History</h3>
        {previousJobs}
      </Col>
    )
  }
})
