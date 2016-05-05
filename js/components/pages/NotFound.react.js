import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
  render() {
    return (
      <article className='p-3'>
        <h1>Page not found.</h1>
        <Link to='/' className='btn mt-3'>Dashboard</Link>
      </article>
    );
  }
}

export default NotFound;
