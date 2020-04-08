import styled from 'styled-components';
import hero from '../assets/img/hero.jpg';

export const StyledApp = styled.div`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  aside {
    position: relative;
    height: 80vh;
    color: var(--color-text-secondary);
    background-image: url(${hero});
    background-size: cover;
    main {
      height: 100%;
      position: relative;
      button {
        background-color: var(--color-secondary);
        border-color: var(--color-secondary);
      }
      nav {
        h1 {
          svg {
            height: 2rem;
          }
        }
        button {
          margin: 0;
        }
      }
      article {
        width: 70%;
        font-size: 2.5rem;
        line-height: 3rem;
        form {
          padding: 0;
          border: none;
          box-shadow: none;
          font-size: 1.3rem;
          line-height: 2rem;
          display: flex;
          align-items: flex-end;
          label {
            margin-right: 32px;
            margin-bottom: 0;
            input {
              width: 260px;
              margin-bottom: 0;
            }
          }
          button {
            margin: 0;
          }
        }
      }
      .device-wrapper {
        position: absolute;
        top: 160px;
        right: 50px;
        .device {
          .screen {
            img {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
  .light {
  }
`;
