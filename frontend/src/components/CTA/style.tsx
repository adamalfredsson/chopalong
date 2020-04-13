import styled from 'styled-components';

export const StyledCTA = styled.section`
  padding: 40px 0;
  background-color: var(--color);
  color: var(--color-text-secondary);

  p {
    max-width: 750px;
  }

  h2 {
    margin-top: 0;
  }

  form {
    padding: 0;
    border: none;
    box-shadow: none;
    font-size: 1.3rem;
    line-height: 2rem;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    label {
      margin-right: 32px;
      margin-bottom: 0;
      min-width: 260px;
      width: 60%;
      input {
        width: 100%;
        margin-bottom: 0;
      }
    }
    button {
      margin: 0;
      margin-top: 8px;
    }
    .thanks {
      font-size: 1.5em;
      margin: 0;
    }
  }
`;
