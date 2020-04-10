import styled from 'styled-components';

export const StyledCook = styled.section`
  padding: 20px 0;
  h2 {
    text-align: center;
  }
  .step {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 16px -16px;
    i {
      margin: 16px 32px;
      width: 80px;
      height: 80px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    article {
      h3 {
        color: var(--color-secondary);
      }
      flex: 1;
      min-width: 280px;
      margin: 0 16px;
    }
  }
`;
