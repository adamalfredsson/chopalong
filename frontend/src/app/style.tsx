import styled from 'styled-components';
import { StyledHero } from '../components/Hero/style';
import pattern from '../assets/img/pattern-shapes.png';

export const StyledApp = styled.div`
  ${StyledHero} {
    min-height: 90vh;
  }
  .cookalongs {
    padding: 80px 0;
    background-image: url(${pattern});
    .cards {
      display: flex;
    }
  }
  .cook {
    h2,
    h3 {
      color: var(--color-secondary);
    }
    padding: 20px 0;
    .step {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      margin: 0 -16px;
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
        flex: 1;
        min-width: 280px;
        margin: 0 16px;
      }
    }
  }
  .signup {
    background-color: var(--color);
    color: var(--color-text-secondary);
  }
`;
