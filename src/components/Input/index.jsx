import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const {
      type,
      name,
      id,
      placeholder,
      value,
      onChange,
      dataTestId,
    } = this.props;

    return (
      <div>
        <input
          name={ name }
          dataTestId={ dataTestId }
          id={ id }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
