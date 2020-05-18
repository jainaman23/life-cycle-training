import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Table from '.';

describe('Table Component', () => {
  it('Should render coreectly', () => {
    const { container } = renderWithTheme(<Table />);

    expect(container.querySelector('table')).toBeTruthy();
  });
});
