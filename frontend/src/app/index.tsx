import React from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { Hero } from '../components/Hero';
import { StyledApp } from './style';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { ReactComponent as SelectIcon } from '../assets/icons/iphone.svg';
import { ReactComponent as RecipeIcon } from '../assets/icons/recipe.svg';
import { ReactComponent as CookIcon } from '../assets/icons/cooking-show.svg';

export const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Hero />
      <section className="cookalongs">
        <h2>Utvalda cookalongs</h2>
        <div className="cards">
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
        </div>
      </section>
      <section className="cook">
        <main>
          <h2>Hur funkar det?</h2>
          <div className="step">
            <i>
              <SelectIcon />
            </i>
            <article>
              <h3>Välj cookalong</h3>
              <p>Vad är du sugen på ikväll? På Chopalong lagar du mat tillsammans med en kock - över internet!</p>
              <p>Använd appen för att hitta en nivå, en rätt och en kock som passar dig.</p>
              <p>
                Här finns cookalongs för såväl kökskatastrofer som blyga matlagningsentusiaster. Dejt-night i karantän
                eller kul kväll med kompisar?
              </p>
            </article>
          </div>
          <div className="step">
            <i>
              <RecipeIcon />
            </i>
            <article>
              <h3>Fixa ingredienser</h3>
              <p>Du kan enkelt se vilka matvaror du behöver för den cookalong du bokat.</p>
              <p>Inhandla det du inte hittar i ditt skafferi och ha allt nära till hands när det är dags.</p>
            </article>
          </div>
          <div className="step">
            <i>
              <CookIcon />
            </i>
            <article>
              <h3>Laga maten tillsammans</h3>
              <p>
                När det äntligen är dags kopplas du och övriga deltagare ihop med kocken över en videochatt och
                matlagningen sätter igång.
              </p>
              <p>Tillsammans lagar ni enligt receptet medan kocken guidar er på vägen.</p>
              <p>Ha så kul!</p>
            </article>
          </div>
        </main>
      </section>
      <section className="signup">
        <main>
          <h2>Bli vår testpilot!</h2>
          <p>
            Just nu är vi på väg att ta fram betaversionen av Chopalong och vi vill gärna höra dina åsikter på vägen!
          </p>
          <p>Du kommer dessutom få exklusiv tillgång till betaversionen!</p>
        </main>
      </section>
      <Footer />
    </StyledApp>
  );
};
