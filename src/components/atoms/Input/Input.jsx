// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './Input.style';
import { Props } from './Input.props';

const Input = ({ className, type, value, onChange, onKeyUp, placeholder, name, id }: Props) => {
  return React.createElement('input', {
    type,
    className,
    onChange,
    value,
    onKeyUp,
    placeholder,
    name,
    id,
  });
};

Input.defaultProps = {
  type: 'text',
};

export default styled(Input)`
  ${styles}
`;
