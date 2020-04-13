import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    overflow-x: hidden;
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

  button {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    color: var(--color-text-secondary);
    &:disabled {
      background-color: var(--color-disabled);
      border-color: var(--color-disabled);
      filter: none;
    }
  }
`;
