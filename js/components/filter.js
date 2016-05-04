/*
 * Filter
 * This is the component used for filtering the list of agents.
 */
import { changeFilter } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {

  render() {

    const dispatch = this.props.dispatch;

    return (
      <div className="u-clearfix">
        <h2 className="left mr-3">Agents</h2>
        <ul className="filter-list left u-inline-list">
          <li>
            <a href="#" onClick={(evt) => { dispatch(changeFilter("all")); }} className={this.props.data.filter === "all" ? "filter-item ml-2 mr-2 selected" : "filter-item ml-2 mr-2"}>
              All
            </a>
          </li>
          <li>
            <a href="#" onClick={(evt) => { dispatch(changeFilter("physical")); }} className={this.props.data.filter === "physical" ? "filter-item ml-2 mr-2 selected" : "filter-item ml-2 mr-2"}>
              Physical
            </a>
          </li>
          <li>
            <a href="#" onClick={(evt) => { dispatch(changeFilter("virtual")); }} className={this.props.data.filter === "virtual" ? "filter-item ml-2 mr-2 selected" : "filter-item ml-2 mr-2"}>
              Virtual
            </a>
          </li>
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
export default connect(select)(Filter);