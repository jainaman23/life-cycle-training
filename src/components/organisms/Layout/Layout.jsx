import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import type { Props } from './Layout.props';
import Filters from '../../molecules/Filters';
import Search from '../../molecules/Search';
import Heading from '../../atoms/Heading';
import Characters from '../Characters';
import styles from './Layout.style';

const Layout = ({ classname }: Props) => {
  const [data, setData] = useState({});

  //   const handleSpeciesFilter = e => {
  //     const arr = e.target.checked
  //       ? [...value, e.target.value]
  //       : value.filter(itm => itm !== e.target.value);

  //     setValue(arr);
  //     getSelectedFilter(arr);
  //   };
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(stories => {
        console.log(stories);
        setData(stories);
      })
      .catch(err => {
        console.log(err);
        throw new Error('Bad response from server');
      });
  }, []);

  return (
    <div className={classnames('app', classname)}>
      <aside className="app__sidebar">
        <Heading type="h2">Filters</Heading>
        <Filters
          filtersList={['Human', 'Mythology', 'Other Species']}
          title="Species"
          //   getSelectedFilter={handleSpeciesFilter}
        />
        <Filters
          filtersList={['Male', 'Female']}
          title="Gender"
          //   getSelectedFilter={handleSpeciesFilter}
        />
        <Filters
          filtersList={['Unknown', 'Post-Apocalyptic Earth', 'Nuptia 4', 'Other Origins']}
          title="Origin"
          //   getSelectedFilter={handleSpeciesFilter}
        />
      </aside>
      <div className="app__main">
        <div className="app__sected-filters">
          <Heading type="h2">Selected Filters</Heading>
          {/* <Tags tags={filters} /> */}
        </div>
        <div className="app__operations">
          <Search />
          {/* <Sorting /> */}
        </div>
        <div className="app__characters">
          <Characters characters={data.results} />
        </div>
      </div>
    </div>
  );
};

export default styled(Layout)`
  ${styles}
`;
