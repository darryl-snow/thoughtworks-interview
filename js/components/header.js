import React, { Component } from 'react';
import Icon from './icon.js';

/*
 * Header
 * This is the component used for displaying the main page header
 * and the login links at the top of every page.
 */
class Header extends Component {

  render() {

    return (
      <header className='c-header u-clearfix'>
        <h1 className='left c-header__heading'>Cruise</h1>
        <ul className='right u-inline-list u-unstyled-list'>
          <li>Signed in as <a href='' title='Go to your profile page'>Member</a></li>
          <li className='ml-3'>
            <a href=''>
              <Icon name='arrow-right' />
              Sign out
            </a>
          </li>
        </ul>
      </header>
    );

  }

}

export default Header;