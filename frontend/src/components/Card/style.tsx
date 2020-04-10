import styled from 'styled-components';
import { Props } from '.';

const coverHeight = '160px';

export const StyledCard = styled.aside<Props>`
  position: relative;
  background-color: #fff;
  color: var(--color-text);
  border: none;
  overflow: hidden;
  z-index: 1;
  padding: 0;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 2px 4px 12px 4px var(--color-shadow);
  }

  i {
    margin-right: 8px;
  }

  .cover {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    height: calc(${coverHeight} + 1px);
    background-color: #000;
    filter: blur(1px);
    overflow: hidden;
    z-index: -1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background-color: var(--color-text);
      background-image: url(${(props) => props.imageUrl});
      background-size: cover;
    }
  }

  .header {
    height: ${coverHeight};
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .chef {
      color: var(--color);
    }
    h3 {
      color: var(--color-text-secondary);
      margin: 0;
    }
  }

  .content {
    padding: 12px;
    color: var(--color-secondary);
    .rating {
      margin-top: 8px;
      color: var(--color);
      font-size: 1.2em;
    }
    .participants {
      .participants-left {
        color: var(--color);
      }
    }
  }
`;
