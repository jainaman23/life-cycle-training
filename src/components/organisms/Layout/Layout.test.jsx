import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Layout from '.';

describe('Tags Component', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Layout />);

    expect(container.querySelector('.app')).toBeTruthy();
  });
});
