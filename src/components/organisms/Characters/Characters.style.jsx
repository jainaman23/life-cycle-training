import { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-wrap: wrap;

  .character {
    flex-basis: 100%;
    background-color: ${props => props.theme.colors.backgroundGrey};
    margin-bottom: ${props => props.theme.size.remSize(16)};
  }

  @media all and (min-width: ${props => props.theme.breakpoints.xs}) {
    .character {
      flex-basis: 50%;
      padding: 0 ${props => props.theme.size.remSize(16)};
    }
  }

  @media all and (min-width: ${props => props.theme.breakpoints.sm}) {
    .character {
      flex-basis: 25%;
    }
  }
`;

export default styles;
