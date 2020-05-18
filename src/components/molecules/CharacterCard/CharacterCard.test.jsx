import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import CharacterCard from '.';

describe('CharacterCard Component', () => {
  it('should render type correctly', () => {
    const { container } = renderWithTheme(
      <CharacterCard>
        <CharacterCard.Figure src="#" alt="test" title="Test" subTitle="testing" />
      </CharacterCard>,
    );
    expect(container.querySelector('.character')).toBeTruthy();
  });

  it('Should render figure correctly', () => {
    const { container } = renderWithTheme(
      <CharacterCard>
        <CharacterCard.Figure src="#" alt="test" title="Test" subTitle="testing" />
        <CharacterCard.Details
          status="status"
          species="species"
          gender="gender"
          origin="origin"
          location="location"
        />
      </CharacterCard>,
    );

    expect(container.querySelector('.character__image-wrapper')).toBeTruthy();
  });

  it('Should render details correctly', () => {
    const { container } = renderWithTheme(
      <CharacterCard>
        <CharacterCard.Figure src="#" alt="test" title="Test" subTitle="testing" />
        <CharacterCard.Details
          status="status"
          species="species"
          gender="gender"
          origin="origin"
          location="location"
        />
      </CharacterCard>,
    );

    expect(container.querySelector('.character__details')).toBeTruthy();
  });

  it('Should render details correctly', () => {
    const { container } = renderWithTheme(
      <CharacterCard>
        <CharacterCard.Figure src="#" alt="test" title="Test" subTitle="testing" />
        <CharacterCard.Details
          status="status"
          species="species"
          gender="gender"
          origin="origin"
          location="location"
        />
      </CharacterCard>,
    );

    expect(container.querySelector('.character__details')).toBeTruthy();
  });

  it('Should throw an error', () => {
    const { container } = renderWithTheme(
      <CharacterCard>
        <p>testing</p>
      </CharacterCard>,
    );
    console.log(container);
    expect(container).toThrow(Error);
  });
});
