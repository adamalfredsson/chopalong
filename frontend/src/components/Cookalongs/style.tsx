import styled from 'styled-components';
import pattern from '../../assets/img/pattern-shapes.png';
import { StyledCard } from '../Card/style';

export const StyledCookalongs = styled.section`
  padding: 80px 0;
  background-image: url(${pattern});
  h2 {
    text-align: center;
    width: 100%;
  }
  .cards {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    overflow: hidden;
    max-width: var(--width-content);
    .card-group {
      flex: 1 1 260px;
      flex-basis: 260px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      overflow: hidden;
      min-width: 260px;
    }
    ${StyledCard} {
      flex: 1 1 200px;
      min-width: 200px;
    }
  }
`;
