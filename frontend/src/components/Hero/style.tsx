import styled from 'styled-components';
import hero from '../../assets/img/hero.jpg';
import { StyledDevice } from '../Device/style';
import { viewports } from '../../utils/constants/mediaQueries';

export const StyledHero = styled.section`
  color: var(--color-text-secondary);
  background: var(--color) url(${hero});
  background-size: cover;
  main {
    height: 100%;
    position: relative;
    button {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
    }
    nav {
      h1 {
        svg {
          height: 2rem;
        }
      }
      button {
        margin: 0;
      }
    }
    article {
      width: 60%;
      font-size: 2rem;
      line-height: 3rem;
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
    }
    ${StyledDevice} {
      position: absolute;
      top: 160px;
      right: 50px;
      width: 300px;
    }
  }
  @media ${viewports.tablet} {
    main {
      article {
        width: 80%;
      }
      ${StyledDevice} {
        display: none;
      }
    }
  }

  @media ${viewports.mobile} {
    main {
      article {
        width: 100%;
        font-size: 1.7rem;
        line-height: 2rem;
      }
      form {
        font-size: 1rem;
      }
    }
  }
`;
