import React from 'react';
import { ReactComponent as CookIcon } from '../../assets/icons/cooking-show.svg';
import { ReactComponent as SelectIcon } from '../../assets/icons/iphone.svg';
import { ReactComponent as RecipeIcon } from '../../assets/icons/recipe.svg';
import { StyledCook } from './style';

export const Cook: React.FC = ({ children, ...props }) => {
  return (
    <StyledCook>
      <main>
        <h2>Hur funkar det?</h2>
        <div className="step">
          <i>
            <SelectIcon />
          </i>
          <article>
            <h3>Välj cookalong</h3>
            <p>
              Dejt-night i karantän eller kul kväll med kompisar? På Chopalong lagar du mat tillsammans med en kock -
              över internet!
            </p>
            <p>
              Använd appen för att hitta en nivå, en rätt och en kock som passar dig. Här finns cookalongs för såväl
              kökskatastrofer som blyga matlagningsentusiaster.
            </p>
            <p>Vad är du sugen på ikväll?</p>
          </article>
        </div>
        <div className="step">
          <i>
            <RecipeIcon />
          </i>
          <article>
            <h3>Fixa ingredienser</h3>
            <p>Du kan enkelt se vilka matvaror du behöver för den cookalong du bokat.</p>
            <p>Inhandla det du inte hittar i ditt skafferi och ha allt nära till hands när det börjar.</p>
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
    </StyledCook>
  );
};
