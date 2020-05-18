// @flow

import { css } from 'styled-components';

const Styles = css`
  padding: ${props => props.theme.size.remSize(16)};
  border: 1px solid ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.size.remSize(16)};

  h2,
  input {
    margin: 0;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.theme.size.remSize(8)};

    input {
      margin-right: ${props => props.theme.size.remSize(8)};
    }
  }

  h2 {
    margin-bottom: ${props => props.theme.size.remSize(8)};
  }
`;

export default Styles;
