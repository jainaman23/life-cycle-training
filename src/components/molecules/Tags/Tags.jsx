import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import type { Props } from './Tags.props';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import styles from './Tags.style';

const Tags = ({ className, tags, getCloseItem }: Props) => {
  return (
    <div className={classnames('tags', className)}>
      {tags?.map(itm => (
        <div className="tag__item" key={itm.name}>
          {itm.name}
          <Button onClick={() => getCloseItem(itm.category, itm.name)}>
            <Icon type="close" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default styled(Tags)`
  ${styles}
`;
