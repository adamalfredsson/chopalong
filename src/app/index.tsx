import React from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { Hero } from '../components/Hero';
import { StyledApp } from './style';

export const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Hero />
      <section>
        <main>
          <h2>Hur funkar det?</h2>
          <article>
            <h3>Välj cookalong</h3>
            <p>Använd appen för att bläddra bland alla cookalongs och hitta en som passar dig!</p>
            <p>Ikväll lagar Louise en ratatouille och det finns lediga platser kvar.</p>
          </article>
          <article>
            <h3>Fixa ingredienser</h3>
            <p>Du kan enkelt se vilka ingredienser du behöver för den cookalong du hittat!</p>
            <p>När ingredienserna är inhandlade är du redo att sätta igång!</p>
          </article>
          <article>
            <h3>Njut av matlagningen</h3>
            <p>
              När det äntligen är dags kopplas du och övriga deltagare ihop med kocken över en videochatt och
              matlagningen sätter igång!
            </p>
            <p>Tillsammans lagar vi enligt receptet och får kocken guidar oss på vägen!</p>
          </article>
        </main>
      </section>
    </StyledApp>
  );
};
