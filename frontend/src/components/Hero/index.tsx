import React, { useState, FormEvent } from 'react';
import { StyledHero } from './style';
import { Device } from '../Device';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import frame from '../../assets/img/frame.jpg';
import axios from 'axios';

export const Hero: React.FC = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [email, setEmail] = useState<string>('');

  const endpoint = process.env.REACT_APP_API_URL! + '/signup';

  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isFormSubmitted) {
      setIsLoading(true);
      try {
        await sendSignupRequest();
        setIsFormSubmitted(true);
      } catch (e) {
        setError('Något gick snett, försök igen!');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const sendSignupRequest = async () => {
    console.log('SIGN UP', email);
    return axios.post(endpoint, { email });
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
              {error ? <p>{error}</p> : <p>Bli först med att använda:</p>}
              <input
                type="email"
                placeholder="louise@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isFormSubmitted}
              />
            </label>
            {isFormSubmitted ? (
              <p className="thanks">
                Tack!{' '}
                <span role="img" aria-label="Yay!">
                  🥳
                </span>
              </p>
            ) : (
              <button type="submit" disabled={isLoading}>
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
