import React, { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import type { Props } from './Search.props';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styles from './Search.style';

const Search = ({ className, title, getValue }: Props) => {
  const [value, setValue] = useState('');

  const handleValue = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    getValue(value);
  };

  return (
    <div className={classnames('search', className)}>
      {title && <label htmlFor="search">{title}</label>}
      <div className="search__field">
        <Input type="search" id="search" value={value} onChange={handleValue} />
        <Button value="Search" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default styled(Search)`
  ${styles}
`;
