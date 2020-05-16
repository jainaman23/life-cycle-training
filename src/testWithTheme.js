// @flow
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const renderWithTheme = (component: void, options: void) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>, { options });

export default renderWithTheme;
