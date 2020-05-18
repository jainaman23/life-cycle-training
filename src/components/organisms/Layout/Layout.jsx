import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import type { Props } from './Layout.props';
import Filters from '../../molecules/Filters';
import Search from '../../molecules/Search';
import Heading from '../../atoms/Heading';
import Tags from '../../molecules/Tags';
import Characters from '../Characters';
import styles from './Layout.style';

/**
 * Overall Layout
 */
const Layout = ({ className }: Props) => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');

  /**
   * Handle Filter
   *
   * @param {String} checkedValues Selected filter value
   * @param {String} removedValues Unselect filter value
   * @param {String} id Filter ID
   */
  const handleFilters = (checkedValues, removedValues, id) => {
    const filtersObj = { ...filters };
    if (removedValues) {
      filtersObj[id] = filtersObj[id]?.filter(itm => itm !== removedValues);
    } else {
      filtersObj[id] = filtersObj[id] ? [...filtersObj[id], checkedValues] : [checkedValues];
    }

    setFilters(filtersObj);
  };

  /**
   * Handle Search Functionality
   *
   * @param {String} value search field value
   */
  const handleSearchValue = value => setSearch(value);

  /**
   * Handle Close Functionality
   *
   * @param {String} name Name of selected tag
   * @param {String} category Category of filter
   */
  const handleCloseFilter = (name, category) => {
    handleFilters(null, name, category);
    document.getElementsByName(name)[0].checked = false;
  };

  /**
   * Handle Sorting Functionality
   *
   * @param {String} e event of select
   */
  const handleSorting = e => setSort(e.target.value);

  /**
   * Sorting data asc or dsc.
   *
   * @param {Object} content fetched data
   */
  const sortedData = content => {
    let sortedContent = { ...content };
    if (sort === 'dsc') {
      sortedContent = sortedContent?.results?.sort((a, b) => b.id - a.id);
    } else {
      sortedContent = sortedContent?.results?.sort((a, b) => a.id - b.id);
    }

    return { ...content, results: sortedContent };
  };

  useEffect(() => {
    const searchfilters = `?${search ? `&name=${search}` : ''}`;
    const filtersString = Object.keys(filters)
      .map(itm => `&${filters[itm].map(ftr => `${itm}=${ftr}`).join('&')}`)
      .join('&');

    fetch(`https://rickandmortyapi.com/api/character/${searchfilters}${filtersString}`)
      .then(response => response.json())
      .then(res => sortedData(res))
      .then(stories => setData(stories))
      .catch(err => {
        throw new Error(err.toString());
      });
  }, [search, filters]);

  useEffect(() => {
    setData(sortedData(data));
  }, [sort]);

  return (
    <div className={classnames('app', className)}>
      <aside className="app__sidebar">
        <Heading type="h2">Filters</Heading>
        <Filters
          filtersList={['Human', 'Mythology', 'Other Species']}
          title="Species"
          getSelectedFilter={(amend, remove) => handleFilters(amend, remove, 'species')}
        />
        <Filters
          filtersList={['Male', 'Female']}
          title="Gender"
          getSelectedFilter={(amend, remove) => handleFilters(amend, remove, 'gender')}
        />
        <Filters
          filtersList={['Unknown', 'Post-Apocalyptic Earth', 'Nuptia 4', 'Other Origins']}
          title="Origin"
          getSelectedFilter={(amend, remove) => handleFilters(amend, remove, 'origin')}
        />
      </aside>
      <div className="app__main">
        <div className="app__sected-filters">
          <Heading type="h2">Selected Filters</Heading>
          <Tags
            tags={Object.keys(filters)?.reduce((accumulator, currentValue) => {
              const tagsCategory = filters[currentValue].map(itm => ({
                category: currentValue,
                name: itm,
              }));
              return [...accumulator, ...tagsCategory];
            }, [])}
            getCloseItem={(category, name) => handleCloseFilter(name, category)}
          />
        </div>
        <div className="app__operations">
          <Search title="Search By Name" getValue={handleSearchValue} />
          <div className="sorting">
            <select onChange={handleSorting}>
              <option value="">Sort by Id</option>
              <option value="asc"> Ascending</option>
              <option value="dsc">Descending</option>
            </select>
          </div>
        </div>
        <div className="app__characte rs">
          <Characters characters={data?.results} />
        </div>
      </div>
    </div>
  );
};

export default styled(Layout)`
  ${styles}
`;
