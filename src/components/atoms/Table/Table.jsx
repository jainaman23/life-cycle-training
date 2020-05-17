import React from 'react';
import styled from 'styled-components';
import styles from './Table.style';
import type { Props } from './Table.props';

const Table = ({ className, children }: Props) => {
  return React.createElement('table', { className }, children);
};

export default styled(Table)`
  ${styles}
`;
