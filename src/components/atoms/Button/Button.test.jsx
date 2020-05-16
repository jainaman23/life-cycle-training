import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Button from '.';

describe('Button Component', () => {
  it('should render type correctly', () => {
    const { container } = renderWithTheme(<Button>Testing</Button>);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('should render class correctly', () => {
    const { container } = renderWithTheme(<Button className="btn">Testing</Button>);
    expect(container.querySelector('.btn')).toBeTruthy();
  });

  it('Should render children correctly', () => {
    const content = 'Testing';
    const { container } = renderWithTheme(<Button variant="icon">{content}</Button>);
    expect(container.querySelector('button').textContent).toEqual(content);
  });
});
