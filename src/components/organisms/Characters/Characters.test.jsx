import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Charaters from '.';

describe('Tags Component', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Charaters />);

    expect(container.querySelector('.characters-list')).toBeTruthy();
  });
});
