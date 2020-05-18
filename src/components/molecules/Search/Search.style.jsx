import { css } from 'styled-components';

const style = css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.size.remSize(16)};

  .search__field {
    display: flex;
    align-items: center;
  }

  label {
    font-size: ${props => props.theme.size.remSize(14)};
    margin-bottom: ${props => props.theme.size.remSize(8)};
  }

  input {
    font-size: ${props => props.theme.size.remSize(18)};
  }

  button {
    padding: ${props => props.theme.size.remSize(4)};
  }
`;

export default style;
