/*
 * AgentsList
 * This is the component used for filtering the list of agents.
 */
import { changeAgentsList } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AgentsList extends Component {

  render() {

    const dispatch = this.props.dispatch;

    return (
      <div className="u-clearfix">
        AgentsList
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
export default connect(select)(AgentsList);