import React, { FormEvent } from 'react';
import { useSignupForm } from '../../utils/forms/useSignupForm';
import { StyledCTA } from './style';
import TagManager from 'react-gtm-module';

export const CTA: React.FC = ({ children, ...props }) => {
  const { error, loading, success, handleSubmit, handleInputChange, values } = useSignupForm();

  const onFormSubmit = (event: FormEvent) => {
    TagManager.dataLayer({ dataLayer: { event: 'interaction', category: 'signup', action: 'submit', label: 'hero' } });
    handleSubmit(event);
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
            {error && <p>Något gick snett, försök igen!</p>}
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
            <button type="submit" disabled={loading}>
              Skicka!
            </button>
          )}
        </form>
      </main>
    </StyledCTA>
  );
};
