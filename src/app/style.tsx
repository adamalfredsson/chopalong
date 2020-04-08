import styled from 'styled-components';
import { StyledHero } from '../components/Hero/style';

export const StyledApp = styled.div`
  ${StyledHero} {
    min-height: 90vh;
  }
`;
