import { css } from 'styled-components';

export default css`
  width: 100%;
  padding: ${props => props.theme.size.remSize(16)};

  .app__sidebar {
    width: 100%;
  }

  .app__sected-filters {
    margin-bottom: ${props => props.theme.size.remSize(16)};
  }

  .app__operations {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
  }

  .sorting,
  .search {
    width: 100%;
  }

  select {
    font-size: ${props => props.theme.size.remSize(18)};
    margin-bottom: ${props => props.theme.size.remSize(16)};
    width: 100%;
  }

  @media all and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;

    .app {
      &__sidebar {
        flex: 0 0 20%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: ${props => props.theme.size.remSize(16)};
      }

      &__main {
        flex: 0 0 80%;
      }
    }

    .app__operations {
      flex-direction: row;
    }

    select,
    .search,
    .sorting {
      width: auto;
    }
  }
`;
