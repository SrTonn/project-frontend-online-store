import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const {
      type,
      name,
      className,
      placeholder,
      value,
      onChange,
      dataTestId,
    } = this.props;

    return (
      <div>
        <input
          name={ name }
          data-testid={ dataTestId }
          className={ className }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}
Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
