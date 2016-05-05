/*
 * AgentsList
 * This is the component used for filtering the list of agents.
 */
import { changeAgentsList } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AgentsList extends Component {

  getAgents() {

    return this.props.data.agents.map((agent, index) => {

      if(this.props.data.filter == "all" || this.props.data.filter == agent.type) {

        return(
          <li key={index} className={ agent.status == "building" ? "c-agents-list__item c-agent c-agent--building u-clearfix" : "c-agents-list__item c-agent u-clearfix"}>
            <div className="c-agent__image">
              <img className="c-image c-image--rounded avatar avatar-small" src={ agent.image } alt={ agent.name } />
            </div>
            <div className="c-agent__details">
              <div className="mb-2">
                <span className="c-agent__name text-left">{ agent.name }</span>
                <span className="c-agent__status text-center">{ agent.status }</span>
                <span className="c-agent__ip text-center">{ agent.IP }</span>
                <span className="c-agent__path">{ agent.path }</span>
              </div>
              <div>
                <a className="c-agent__specify-resources" href="">Specify Resources</a>
                Resources:
                <ul className="u-inline-list u-unstyled-list u-inline ml-3">
                  { this.getResources(agent) }
                </ul>
              </div>
            </div>
            { agent.status == "idle" && <div className="c-agent__deny">
              <a href="">Deny</a>
            </div> }
          </li>
        );

      } else {

        return "";

      }

    });

  }

  getResources(agent) {

    return agent.resources.map((resource, index) => {
      return (
        <li className="mr-3" key={index}>
          {resource}
          <button className="btn btn-sm c-button c-button--plain ml-1" title="Remove this resource" type="button">&times;</button>
        </li>
      );
    });

  }

  render() {

    const dispatch = this.props.dispatch;

    return (
      <div className="u-clearfix">
        <ul className="u-unstyled-list">
          { this.getAgents() }
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
export default connect(select)(AgentsList);