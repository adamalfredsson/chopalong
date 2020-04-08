import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyles = createGlobalStyle`
  body {
    padding-top: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;
