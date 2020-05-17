import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import type { Props } from './Characters.props';
import CharacterCard from '../../molecules/CharacterCard';
import getPastTime from '../../../utils';
import styles from './Characters.style';

const Characters = ({ className, characters }: Props) => {
  return (
    <div className={classnames('characters-list', className)}>
      {characters?.map(itm => (
        <div className="characters-list__wrapper">
          <CharacterCard key={itm.id}>
            <CharacterCard.Figure
              src={itm?.image}
              alt={itm.name}
              title={itm.name}
              subTitle={`id: ${itm.id}${
                itm.created ? ` - created ${getPastTime(itm.created)}` : ''
              }`}
            />
            <CharacterCard.Details
              status={itm.status}
              species={itm.species}
              gender={itm.species}
              origin={itm.origin}
              location={itm.location}
            />
          </CharacterCard>
        </div>
      ))}
    </div>
  );
};

export default styled(Characters)`
  ${styles}
`;
