import { createGlobalStyle } from 'styled-components';
import { viewports } from '../../utils/constants/mediaQueries';

export const StyledGlobalStyles = createGlobalStyle`
  body {
    padding: 0;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  input {
    font-family: var(--font);
    line-height: 2rem;
    &:disabled {
      background-color: var(--color-accent);
    }
  }

  main, footer {
    width: 100%;
  }


  @media ${viewports.mobile} {
    html {
      font-size: 14px;
    }
  }
`;
