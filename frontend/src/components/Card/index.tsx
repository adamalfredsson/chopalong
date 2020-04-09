import React from 'react';
import { StyledCard } from './style';
import { faStar, faStarHalf, faUser, faCoins, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Props {
  imageUrl: string;
  chef: string;
  time: string;
  recipe: string;
  participants: number;
  price: number;
  participantsLeft?: number;
  maxRating?: boolean;
}

export const Card: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      <div className="header">
        <div className="price chef">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span className="name">{props.chef}</span>
        </div>
        <h3>{props.recipe}</h3>
      </div>
      <div className="content">
        <div className="time">
          <i>
            <FontAwesomeIcon icon={faClock} />
          </i>
          <span>{props.time}</span>
        </div>
        <div className="price">
          <i>
            <FontAwesomeIcon icon={faCoins} />
          </i>
          <span>{props.price} kr</span>
        </div>
        <div className="participants">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>{props.participants}</span>
          {props.participantsLeft != null && (
            <span className="participants-left"> ({props.participantsLeft} kvar!)</span>
          )}
        </div>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={props.maxRating ? faStar : faStarHalf} />
        </div>
      </div>
      <div className="cover"></div>
    </StyledCard>
  );
};
