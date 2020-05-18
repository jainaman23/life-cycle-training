// @flow

import React from 'react';
import { fireEvent } from '@testing-library/react';
import Filters from './Filters';
import renderWithTheme from '../../../testWithTheme';

describe('Filters Component', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTheme(<Filters filtersList={[]} />);
    expect(container.querySelector('.filters')).toBeTruthy();
  });

  it('Should render title', () => {
    const title = 'Heading';
    const { container } = renderWithTheme(<Filters title={title} filtersList={[]} />);

    expect(container.querySelector('.filters__title')).toBeTruthy();
  });

  it('Should display correct title', () => {
    const title = 'Heading';
    const { getAllByText } = renderWithTheme(<Filters title={title} filtersList={[]} />);

    expect(getAllByText(title)).toHaveLength(1);
  });

  it('Should display correct filters list items', () => {
    const title = 'Heading';
    const { container } = renderWithTheme(
      <Filters title={title} filtersList={['Male', 'Female']} />,
    );

    expect(container.querySelectorAll('input')).toHaveLength(2);
  });

  it('Should display filters labels correctly', () => {
    const title = 'Heading';
    const { container } = renderWithTheme(
      <Filters title={title} filtersList={['Male', 'Female']} />,
    );

    expect(container.querySelectorAll('label')).toHaveLength(2);
  });

  it('Should display filters label text correctly', () => {
    const { container } = renderWithTheme(<Filters filtersList={['Male']} />);
    expect(container.querySelector('label').textContent).toBe('Male');
  });

  it('Should return value of checked items on click', () => {
    let arr = [];
    const getSelectedValue = jest.fn().mockImplementation(itm => {
      arr = itm;
    });

    const { container } = renderWithTheme(
      <Filters filtersList={['Male']} getSelectedFilter={getSelectedValue} />,
    );
    fireEvent.click(container.querySelector('input'));
    expect(getSelectedValue).toHaveBeenCalled();
    expect(arr).toBe('Male');
  });

  it('Should remove value of checked items on double click', () => {
    let arr = [];
    const getSelectedValue = jest.fn().mockImplementation((amend, removed) => {
      arr = removed;
    });

    const { container } = renderWithTheme(
      <Filters filtersList={['Male']} getSelectedFilter={getSelectedValue} />,
    );
    fireEvent.click(container.querySelector('input'));
    expect(getSelectedValue).toHaveBeenCalled();
    fireEvent.click(container.querySelector('input'));
    expect(arr).toBe('Male');
  });
});
