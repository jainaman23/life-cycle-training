import { css } from 'styled-components';

const style = css`
  display: flex;
  flex-wrap: wrap;

  .tag__item {
    background: ${props => props.theme.colors.bgGrey};
    padding: ${props => props.theme.size.remSize(4)};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.size.remSize(12)};
    border-radius: ${props => props.theme.size.remSize(5)};
    margin-right: ${props => props.theme.size.remSize(8)};
    margin-bottom: ${props => props.theme.size.remSize(8)};
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      color: ${props => props.theme.colors.white};
      padding-right: 0;
    }
  }
`;

export default style;
