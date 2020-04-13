import React, { createContext, useState } from 'react';

const LS_CONSENT_GIVEN = 'consent.time';

const getPersistedState = (): boolean => {
  const timestamp = localStorage.getItem(LS_CONSENT_GIVEN);
  return !!timestamp;
};

export const CookiesContext = createContext<{ giveConsent: () => void; isConsentGiven: boolean }>({
  giveConsent: () => {},
  isConsentGiven: getPersistedState(),
});

export const CookiesProvider: React.FC = ({ children }) => {
  const [isConsentGiven, setIsConsentGiven] = useState(getPersistedState());

  const giveConsent = (): void => {
    setIsConsentGiven(true);
    const timestamp = Date.now();
    localStorage.setItem(LS_CONSENT_GIVEN, timestamp.toString());
  };

  return <CookiesContext.Provider value={{ isConsentGiven, giveConsent }}>{children}</CookiesContext.Provider>;
};
