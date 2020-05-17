// @flow

import React, { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import type { Props } from './Filters.props';
import Input from '../../atoms/Input';
import Heading from '../../atoms/Heading';
import styles from './Filters.style';

/**
 * Filters Panel
 *
 * @param {String} className name of class
 * @param {Array} filtersList List of filter items
 * @param {String} title Title of filter section
 * @param {Function} getSelectedFilter Callback to get selected filters items
 *
 * @return filter Component
 */
const Filters = ({ className, filtersList, title, getSelectedFilter }: Props) => {
  const [value, setValue] = useState([]);

  const handleChange = e => {
    const arr = e.target.checked
      ? [...value, e.target.value]
      : value.filter(itm => itm !== e.target.value);

    setValue(arr);
    getSelectedFilter(arr);
  };

  return (
    <div className={classnames('filters', className)}>
      {title && (
        <Heading type="h2" className="filters__title">
          {title}
        </Heading>
      )}
      {filtersList?.map(itm => (
        <label key={itm} htmlFor={itm}>
          <Input type="checkbox" value={itm} onChange={handleChange} />
          {itm}
        </label>
      ))}
    </div>
  );
};

export default styled(Filters)`
  ${styles}
`;
