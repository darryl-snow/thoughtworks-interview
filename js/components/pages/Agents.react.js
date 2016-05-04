/*
 * Agents
 * This is the first thing users see of our App
 */

import { changeFilter } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Filter from '../filter.js';
import AgentsList from '../agents-list.js';
import AgentsSidebar from '../agents-sidebar.js';

class Agents extends Component {

  render() {
    return (
      <div>
        <Filter />
        <div className="columns">
          <div className="two-thirds column">
            <AgentsList />
          </div>
          <div className="one-third column">
            <AgentsSidebar />
          </div>
        </div>
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
export default connect(select)(Agents);
