import React, { FormEvent } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import frame from '../../assets/img/frame.jpg';
import { useSignupForm } from '../../utils/forms/useSignupForm';
import { Device } from '../Device';
import { StyledHero } from './style';
import TagManager from 'react-gtm-module';

export const Hero: React.FC = () => {
  const { error, loading, success, handleSubmit, handleInputChange, values } = useSignupForm();

  const onFormSubmit = (event: FormEvent) => {
    TagManager.dataLayer({ dataLayer: { event: 'interaction', category: 'signup', action: 'submit', label: 'hero' } });
    handleSubmit(event);
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
              {error ? <p>Något gick snett, försök igen!</p> : <p>Bli först med att använda:</p>}
              <input
                type="email"
                name="email"
                placeholder="louise@example.com"
                value={values.email}
                onChange={handleInputChange}
                disabled={success || false}
              />
            </label>
            {success ? (
              <p className="thanks">
                Tack!{' '}
                <span role="img" aria-label="Yay!">
                  🥳
                </span>
              </p>
            ) : (
              <button type="submit" disabled={false}>
                Skicka!
              </button>
            )}
          </form>
        </article>
        <Device device="iPhoneX" color="black" orientation="portrait">
          <img src={frame} alt="Chopalong" />
        </Device>
      </main>
    </StyledHero>
  );
};
