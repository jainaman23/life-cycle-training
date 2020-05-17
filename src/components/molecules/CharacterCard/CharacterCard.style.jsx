import { css } from 'styled-components';

const styles = css`
  color: ${props => props.theme.colors.white};
  max-width: 300px;
  margin: auto;
  padding: ${props => props.theme.size.remSize(16)} 0;

  figure {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-top-left-radius: ${props => props.theme.size.remSize(16)};
      border-top-right-radius: ${props => props.theme.size.remSize(16)};
    }
  }

  figcaption {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    padding: ${props => props.theme.size.remSize(16)};

    h3 {
      margin: 0;
      font-weight: 400;
      font-size: ${props => props.theme.size.remSize(22)};
      margin-bottom: ${props => props.theme.size.remSize(8)};
    }

    p {
      margin: 0;
    }
  }

  .character__details {
    background-color: ${props => props.theme.colors.greyColor};
    padding: ${props => props.theme.size.remSize(16)};
    border-bottom-left-radius: ${props => props.theme.size.remSize(16)};
    border-bottom-right-radius: ${props => props.theme.size.remSize(16)};
  }

  table {
    border-collapse: collapse;

    td {
      border-bottom: 1px solid ${props => props.theme.colors.white};
      padding: ${props => props.theme.size.remSize(16)} 0;
      padding-right: ${props => props.theme.size.remSize(8)};
      font-size: ${props => props.theme.size.remSize(14)};

      &:last-child {
        text-align: right;
        color: ${props => props.theme.colors.secondaryColor};

        a {
          color: ${props => props.theme.colors.secondaryColor};
          text-decoration: none;
        }
      }
    }

    tr:last-child {
      td {
        border-bottom: none;
      }
    }
  }
`;

export default styles;
