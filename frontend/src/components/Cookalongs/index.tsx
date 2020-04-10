import React from 'react';
import { StyledCookalongs } from './style';
import { Card } from '../Card';

export const Cookalongs: React.FC = ({ children, ...props }) => {
  return (
    <StyledCookalongs>
      <h2>Utvalda cookalongs</h2>
      <div className="cards">
        <div className="card-group">
          <Card
            chef="isabellaskök"
            recipe="Pumpasoppa"
            imageUrl="https://source.unsplash.com/w6ftFbPCs9I/320x240"
            price={80}
            time="18:30 (60m)"
            participants={10}
            maxRating={true}
          ></Card>
          <Card
            chef="edkitchen"
            recipe="Pasta med egengjord pesto"
            imageUrl="https://source.unsplash.com/12eHC6FxPyg/320x240"
            price={60}
            time="19:00 (60m)"
            participants={20}
            participantsLeft={3}
          ></Card>
        </div>
        <div className="card-group">
          <Card
            chef="Nina"
            recipe="Italiensk pizza"
            imageUrl="https://source.unsplash.com/HPZs4EXRFSU/320x240"
            price={90}
            time="18:00 (90m)"
            participants={13}
          ></Card>
          <Card
            chef="sofias_veganska"
            recipe="Solrosburgare"
            imageUrl="https://source.unsplash.com/VA7WfV-OFsM/320x240"
            price={80}
            time="17:30 (45m)"
            participants={6}
            participantsLeft={1}
            maxRating={true}
          ></Card>
        </div>
      </div>
    </StyledCookalongs>
  );
};
