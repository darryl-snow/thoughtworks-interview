/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import Logo from '../../img/logo.png';
import Header from './header.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="tabnav">
          <nav className="tabnav-tabs text-right">
            <IndexLink className="tabnav-tab" activeClassName="selected" to="/">Dashboard</IndexLink>
            <Link className="tabnav-tab" activeClassName="selected" to="/my-cruise">My Cruise</Link>
            <Link className="tabnav-tab" activeClassName="selected" to="/agents">Agents</Link>
            <Link className="tabnav-tab" activeClassName="selected" to="/help">Help</Link>
          </nav>
        </div>
        { this.props.children }
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
export default connect(select)(App);
