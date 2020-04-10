import React from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt, faCopyright, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFooter } from './style';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <footer>
        <h2>Säg hej!</h2>
        <address>
          <a href="mailto:hej@chopalong.se?Subject=Hej">
            <i>
              <FontAwesomeIcon icon={faAt} />
            </i>
            <span>hej@chopalong.se</span>
          </a>
          {/* <li>
            <a href="mailto:hej@chopalong.se">
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
              <span>@chopalong</span>
            </a>
          </li>
          <li>
            <a href="mailto:hej@chopalong.se">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
              <span>@chopalong</span>
            </a>
          </li> */}
          <a
            href="https://www.google.com/maps/place/Fabriksgatan+38,+412+51+G%C3%B6teborg/@57.7012664,11.9916013,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff382d09688f9:0xfb12a594d5f2c9a2!8m2!3d57.7012636!4d11.99379"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faMapMarker} />
            </i>
            <span>Fabriksgatan 38, 412 51 Göteborg</span>
          </a>
          <a href="https://zodiapps.com/" target="_blank" rel="noopener noreferrer">
            <i>
              <FontAwesomeIcon icon={faCopyright} />
            </i>
            <span>Zodiapps AB</span>
          </a>
        </address>
      </footer>
    </StyledFooter>
  );
};
