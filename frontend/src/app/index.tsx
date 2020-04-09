import React from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { Hero } from '../components/Hero';
import { StyledApp } from './style';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';

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
      <section className="chef">
        <Card
          chef="isabellaskök"
          recipe="Pumpasoppa"
          imageUrl="https://source.unsplash.com/w6ftFbPCs9I/320x240"
          price={80}
          time="18:30 (60m)"
          participants={10}
          maxRating={true}
        ></Card>
        <Card
          chef="edkitchen"
          recipe="Pasta med egengjord pesto"
          imageUrl="https://source.unsplash.com/12eHC6FxPyg/320x240"
          price={60}
          time="19:00 (60m)"
          participants={20}
          participantsLeft={3}
        ></Card>
        <Card
          chef="Nina"
          recipe="Italiensk pizza"
          imageUrl="https://source.unsplash.com/HPZs4EXRFSU/320x240"
          price={90}
          time="18:00 (90m)"
          participants={13}
        ></Card>
        <Card
          chef="sofias_veganska"
          recipe="Solrosburgare"
          imageUrl="https://source.unsplash.com/VA7WfV-OFsM/320x240"
          price={80}
          time="17:30 (45m)"
          participants={6}
          participantsLeft={1}
          maxRating={true}
        ></Card>
      </section>
      <Footer />
    </StyledApp>
  );
};
