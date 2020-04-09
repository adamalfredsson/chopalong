import React, { useState, FormEvent } from 'react';
import { StyledHero } from './style';
import { Device } from '../Device';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import frame from '../../assets/img/frame.jpg';
import axios from 'axios';

export const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [email, setEmail] = useState<string>('');

  const endpoint = process.env.REACT_APP_API_URL! + '/signup';

  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await sendSignupRequest();
    setIsFormSubmitted(true);
    setIsLoading(true);
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
          <p>Följ receptet live och ha kul samtidigt som du blir en bättre kock {endpoint}</p>
          {isFormSubmitted ? (
            <p>Tack så mycket!</p>
          ) : (
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
              <button type="submit" disabled={isLoading}>
                Skicka!
              </button>
            </form>
          )}
        </article>
        <Device device="iPhoneX" color="black" orientation="portrait">
          <img src={frame} alt="Chopalong" />
        </Device>
      </main>
    </StyledHero>
  );
};
