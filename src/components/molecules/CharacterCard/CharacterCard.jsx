import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';
import Table from '../../atoms/Table';
import type { Props, FigureProps, DetailsProps } from './CharacterCard.props';
import styles from './CharacterCard.style';

const CharacterCard = ({ className, children }: Props) => {
  const components = ['CharacterCardDetails', 'CharacterCardFigure'];

  if (
    children.length > 2 ||
    !components.includes(children?.[0]?.type.displayName) ||
    !components.includes(children?.[1]?.type.displayName)
  ) {
    return new Error(
      'CharacterCard component should have CharacterCard.Details or CharacterCard.Figure for Details and Figure respectively',
    );
  }

  return <div className={classnames('character', className)}>{children}</div>;
};

CharacterCard.Figure = ({ className, src, alt, title, subTitle }: FigureProps) => {
  return (
    <figure className={classnames('character__image-wrapper', className)}>
      <Image className="character__image" src={src} alt={alt} />
      <figcaption className="character__caption">
        <Heading type="h3">{title}</Heading>
        {subTitle && <p>{subTitle}</p>}
      </figcaption>
    </figure>
  );
};

CharacterCard.Details = ({
  status,
  species,
  gender,
  origin,
  location,
  className,
}: DetailsProps) => {
  return (
    <div className={classnames('character__details', className)}>
      <Table>
        <tbody>
          <tr>
            <td>STATUS</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>SPECIES</td>
            <td>{species}</td>
          </tr>
          <tr>
            <td>GENDER</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>ORIGIN</td>
            <td>
              <a href={origin.url}>{origin.name}</a>
            </td>
          </tr>
          <tr>
            <td>LAST LOCATION</td>
            <td>
              <a href={location.url}>{location.name}</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

CharacterCard.Details.displayName = 'CharacterCardDetails';
CharacterCard.Figure.displayName = 'CharacterCardFigure';

export default styled(CharacterCard)`
  ${styles}
`;
