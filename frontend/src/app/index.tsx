import React from 'react';
import { Cookalongs } from '../components/Cookalongs';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { GlobalStyle } from '../components/GlobalStyle';
import { Hero } from '../components/Hero';
import { StyledApp } from './style';
import { Cook } from '../components/Cook';

export const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Hero />
      <Cookalongs />
      <Cook />
      <CTA />
      <Footer />
    </StyledApp>
  );
};
