import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from '../../../testWithTheme';
import Tags from '.';

describe('Tags Component', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Tags />);

    expect(container.querySelector('.tags')).toBeTruthy();
  });

  it('Should render correctly', () => {
    const { container } = renderWithTheme(
      <Tags
        tags={[
          { category: 'gender', name: 'male' },
          { category: 'gender', name: 'female' },
        ]}
      />,
    );

    expect(container.querySelectorAll('button')).toHaveLength(2);
  });

  it('Should retur close item correctly', () => {
    const handleClose = jest.fn();
    const { container } = renderWithTheme(
      <Tags
        tags={[
          { category: 'gender', name: 'male' },
          { category: 'gender', name: 'female' },
        ]}
        getCloseItem={handleClose}
      />,
    );

    fireEvent.click(container.querySelector('button'));

    expect(handleClose).toHaveBeenCalled();
  });
});
