import React, { useContext, useState } from 'react';
import { StyledCookieBanner } from './style';
import { CookiesContext } from '../../contexts/cookies';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CookieBanner: React.FC = ({ children, ...props }) => {
  const { giveConsent } = useContext(CookiesContext);
  const [fadeOut, setFadeOut] = useState(false);

  const TRANSITION_DURATION = 400;

  const onAccept = async () => {
    setFadeOut(true);
    await new Promise((resolve) => setTimeout(resolve, TRANSITION_DURATION));
    giveConsent();
  };

  return (
    <StyledCookieBanner shouldFadeOut={fadeOut} transitionDuration={TRANSITION_DURATION}>
      <p>
        <i>
          <FontAwesomeIcon icon={faCookieBite} />
        </i>
        <span>Här används kakor för att maxa din upplevelse!</span>
      </p>
      <button onClick={onAccept}>Okej</button>
    </StyledCookieBanner>
  );
};
