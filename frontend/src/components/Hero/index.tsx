import React, { useState, FormEvent } from 'react';
import { StyledHero } from './style';
import { Device } from '../Device';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import frame from '../../assets/img/frame.jpg';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>();

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledHero>
      <main>
        <nav>
          <h1>
            <Logo />
          </h1>
        </nav>
        <article>
          <h2>Virtuella cook-alongs</h2>
          <p>Följ receptet live och ha kul samtidigt som du blir en bättre kock</p>
          <form onSubmit={onFormSubmit}>
            <label>
              <p>Bli först med att använda:</p>
              <input
                type="email"
                placeholder="johanna@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button>Skicka!</button>
          </form>
        </article>
        <Device device="iPhoneX" color="black" orientation="portrait">
          <img src={frame} alt="A preview of the app" />
        </Device>
      </main>
    </StyledHero>
  );
};
