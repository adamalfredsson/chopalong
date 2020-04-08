import React from 'react';
import { StyledDevice } from './style';

export const Device: React.FC<{ device: string; color: string; orientation: string }> = ({ children, ...props }) => {
  return (
    <StyledDevice>
      <div className="device" data-device={props.device} data-color={props.color} data-orientation={props.orientation}>
        <div className="screen">{children}</div>
      </div>
    </StyledDevice>
  );
};
