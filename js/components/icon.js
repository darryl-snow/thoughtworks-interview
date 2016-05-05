import React, { Component, PropTypes } from 'react';

class Icon extends Component {

  render() {

    const { name } = this.props;

    return (

      <svg className={'c-icon c-icon--'+ name} viewBox='0 0 32 32'>
        <use xlinkHref={'#icon--'+ name}></use>
      </svg>

    );
  }

}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;