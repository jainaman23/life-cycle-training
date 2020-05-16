// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './Button.style';
import { Props } from './Button.props';

const Button = ({ className, children, disabled, onClick, type }: Props) =>
  React.createElement('button', { type, className, disabled, onClick }, children);

Button.defaultProps = {
  type: 'button',
};

export default styled(Button)`
  ${styles};
`;
