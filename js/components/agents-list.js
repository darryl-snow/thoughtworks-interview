/*
 * AgentsList
 * This is the component used for filtering the list of agents.
 */
import { updateResources } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './icon';

class AgentsList extends Component {

  constructor(props) {

    super(props);

    this.state = {};
    this.state.agents = JSON.parse(JSON.stringify(this.props.data.agents));

    this.dispatch = this.props.dispatch;

  }

  getAgents() {

    return this.props.data.agents.map((agent, index) => {

      if(this.props.data.filter == 'all' || this.props.data.filter == agent.type) {

        return(
          <li key={index} ref={'agent' + index} className={ agent.status == 'building' ? 'c-agents-list__item c-agent c-agent--building u-clearfix' : 'c-agents-list__item c-agent u-clearfix'}>
            <div className='c-agent__image'>
              <img className='c-image c-image--rounded avatar avatar-small' src={ agent.image } alt={ agent.name } />
            </div>
            <div className='c-agent__details'>
              <div className='mb-2'>
                <span className='c-agent__name text-left'>{ agent.name }</span>
                <span className='c-agent__status text-center'>{ agent.status }</span>
                <span className='c-agent__ip text-center'>{ agent.IP }</span>
                <span className='c-agent__path'>{ agent.path }</span>
              </div>
              <div>
                <a className='c-agent__specify-resources' href='#' onClick={this.showPopover.bind(this)} data-agent={index}>
                  <Icon name='plus' />
                  Specify Resources
                </a>
                Resources:
                <ul className='u-inline-list u-unstyled-list u-inline ml-3'>
                  { this.getResources(agent) }
                </ul>
              </div>
            </div>
            { agent.status == 'idle' && <div className='c-agent__deny'>
              <a href=''>
                <Icon name='forbid' />
                Deny
              </a>
            </div> }
            <div className='c-popover'>
              <input className='form-control input-block mb-3' ctype='text' placeholder='comma-separated list' onChange={this.handleChange.bind(this)} value={this.getResourceList(index)} data-agent={index} />
              <button type='button' className='btn btn-sm mr-3' onClick={(evt) => { this.dispatch(updateResources(this.state.agents)); this.hideAllPopovers(); }} data-agent={index}>Add Resources</button>
              <button type='button' className='btn btn-sm' onClick={this.hideAllPopovers.bind(this)}>Close</button>
            </div>
          </li>
        );

      } else {

        return '';

      }

    });

  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      agents: JSON.parse(JSON.stringify(nextProps.data.agents))
    });

  }

  handleChange(e) {

    let index = e.target.dataset.agent;
    let agents = this.state.agents;

    agents[index].resources = e.target.value.split(', ');
    this.state.agents[index].resources = e.target.value.split(', ');
    this.setState({
      agents: agents
    })

  }

  getResourceList(index) {
    return this.state.agents[index].resources.join(', ');
  }

  getResources(agent) {

    return agent.resources.map((resource, index) => {
      return (
        <li className='mr-3' key={index}>
          {resource}
          <button className='btn btn-sm c-button c-button--plain ml-1' onClick={ this.deleteResource.bind(this) } data-agent={agent.id} data-index={index} title='Remove this resource' type='button'>
            <Icon name='close' />
          </button>
        </li>
      );
    });

  }

  deleteResource(e) {

    e.preventDefault();

    let agent = this.state.agents.filter((agent) => {
      return agent.id == e.target.dataset.agent;
    });

    agent[0].resources.splice(e.target.dataset.resource, 1);

    this.dispatch(updateResources(this.state.agents));

  }

  hideAllPopovers() {

    let popovers = document.querySelectorAll('.c-popover');

    for(let i = 0; i < popovers.length; i++) {
      popovers[i].classList.remove('is-shown');
    }

  }

  showPopover(e) {

    e.preventDefault();

    let popover = this.refs['agent' + e.target.dataset.agent].querySelector('.c-popover');

    if(popover.classList.contains('is-shown')) {
      this.hideAllPopovers();
    } else {
      this.hideAllPopovers();
      popover.classList.add('is-shown');
    }

  }

  render() {

    const dispatch = this.props.dispatch;

    return (
      <div className='u-clearfix'>
        <ul className='u-unstyled-list'>
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