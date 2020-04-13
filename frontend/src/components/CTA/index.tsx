import React, { useState, FormEvent } from 'react';
import { StyledCTA } from './style';
import axios from 'axios';

export const CTA: React.FC = ({ children, ...props }) => {
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
    <StyledCTA>
      <main>
        <h2>Bli vår testpilot!</h2>
        <p>
          Just nu är vi på väg att ta fram första versionen av Chopalong och vi vill gärna höra dina åsikter på vägen!
        </p>
        <p>Du kommer dessutom få exklusiv tillgång till betaversionen!</p>

        <form onSubmit={onFormSubmit}>
          <label>
            {error && <p>{error}</p>}
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
      </main>
    </StyledCTA>
  );
};
