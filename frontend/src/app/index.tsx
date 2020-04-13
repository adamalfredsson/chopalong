import React, { useContext } from 'react';
import { Cook } from '../components/Cook';
import { Cookalongs } from '../components/Cookalongs';
import { CookieBanner } from '../components/CookieBanner';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { GlobalStyle } from '../components/GlobalStyle';
import { Hero } from '../components/Hero';
import { CookiesContext, CookiesProvider } from '../contexts/cookies';
import { StyledApp } from './style';

export const App: React.FC = () => {
  const { isConsentGiven } = useContext(CookiesContext);
  return (
    <CookiesProvider>
      <StyledApp>
        <GlobalStyle />
        {!isConsentGiven && <CookieBanner />}
        <Hero />
        <Cookalongs />
        <Cook />
        <CTA />
        <Footer />
      </StyledApp>
    </CookiesProvider>
  );
};
