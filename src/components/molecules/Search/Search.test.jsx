import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from '../../../testWithTheme';
import Search from '.';

describe('Search Component', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Search />);

    expect(container.querySelector('.search')).toBeTruthy();
  });

  it('Should render label correctly', () => {
    const { getByLabelText } = renderWithTheme(<Search title="Search Title" />);

    expect(getByLabelText('Search Title')).toBeTruthy();
  });

  it('Should give search value on submit ', () => {
    const handleValue = jest.fn();
    const { container } = renderWithTheme(<Search title="Search Title" getValue={handleValue} />);
    fireEvent.click(container.querySelector('button'));

    expect(handleValue).toBeCalled();
  });

  it('Should give search value on submit ', () => {
    let testingVar;
    const handleValue = jest.fn().mockImplementation(itm => {
      testingVar = itm;
    });
    const { container } = renderWithTheme(<Search title="Search Title" getValue={handleValue} />);
    fireEvent.change(container.querySelector('input'), { target: { value: 'test' } });
    fireEvent.click(container.querySelector('button'));

    expect(testingVar).toBe('test');
  });
});
