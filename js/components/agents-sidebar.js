/*
 * AgentsSidebar
 * This is the component used for the sidebar on the agents page.
 */
import { changeAgentsSidebar } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AgentsSidebar extends Component {

  render() {

    const dispatch = this.props.dispatch;
    let building = this.props.data.agents.filter((agent) => { return agent.status === 'building'; }).length;
    let idle = this.props.data.agents.filter((agent) => { return agent.status === 'idle'; }).length;
    let historicalAgents = this.props.data.historicalAgents.map((agent, index) => {
      return(
        <li key={index} className='mb-3'>{agent}</li>
      )
    });

    return (
      <div>

        <h3 className='mb-3'>Summary</h3>

        <ul className='u-unstyled-list'>
          <li className='mb-3'>building: {building}</li>
          <li className='mb-3'>idle: {idle}</li>
        </ul>

        <h3 className='mb-3 mt-3'>History</h3>

        <ul className='u-unstyled-list'>
          {historicalAgents}
        </ul>

      </div>
    );
  }

}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AgentsSidebar);