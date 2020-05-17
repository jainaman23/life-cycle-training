import React, { useState } from 'react';
import classnames from 'classnames';
import type { Props } from './Search.props';
import Input from '../../atoms/Input';

const Search = ({ className, title, getValue }: Props) => {
  const [value, setValue] = useState();

  const handleValue = e => {
    setValue(e.target.value);
    getValue(e.target.value);
  };

  return (
    <div className={classnames('search', className)}>
      {title && <label htmlFor="search">{title}</label>}
      <Input type="search" id="search" value={value} onChange={handleValue} />
      <Input type="submit" onClick={() => getValue(value)} />
    </div>
  );
};

export default Search;
