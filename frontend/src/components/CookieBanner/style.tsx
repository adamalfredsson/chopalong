import styled from 'styled-components';
import { viewports } from '../../utils/constants/mediaQueries';

export const StyledCookieBanner = styled.aside<{ shouldFadeOut: boolean; transitionDuration: number }>`
  position: fixed;
  bottom: 32px;
  left: 40px;
  margin-right: 40px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  background-color: var(--color-text-secondary);
  border-radius: 8px;
  box-shadow: var(--box-shadow) var(--color-shadow);
  z-index: 10;
  transition-property: all;
  transition-duration: ${({ transitionDuration }) => transitionDuration}ms;
  opacity: ${({ shouldFadeOut }) => (shouldFadeOut ? 0 : 1)};
  transform: ${({ shouldFadeOut }) => (shouldFadeOut ? 'translateY(20px)' : 'none')};
  p {
    margin-right: 16px;
    display: flex;
    align-items: center;
    i {
      margin-right: 16px;
      font-size: 1.8em;
      color: var(--color);
    }
  }
  button {
    margin: 0;
    padding: 0.4rem 1rem;
  }
  @media ${viewports.mobile} {
    bottom: 8px;
    left: 8px;
    margin-right: 8px;
  }
`;
