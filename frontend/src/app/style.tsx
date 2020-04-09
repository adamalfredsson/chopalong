import styled from 'styled-components';
import { StyledHero } from '../components/Hero/style';

export const StyledApp = styled.div`
  ${StyledHero} {
    min-height: 90vh;
  }
  section.chef {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: var(--color);
    color: var(--color-text-secondary);
  }
`;
