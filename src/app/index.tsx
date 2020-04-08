import React from 'react';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { GlobalStyle } from '../components/GlobalStyle';
import { StyledApp } from './style';

export const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <aside className="hero">
        <main>
          <nav>
            <h1>
              <Logo />
            </h1>
            <button>Sign up</button>
          </nav>
          <article>
            <h2>Cookalong</h2>
            <p>Möt din kock live!</p>
            <form>
              <label>
                <p>Bli först med att använda!</p>
                <input type="email" placeholder="johanna@gmail.com" />
              </label>
              <button>Skicka!</button>
            </form>
          </article>
          <div className="device-wrapper">
            <div className="device" data-device="iPhoneX" data-color="black" data-orientation="portrait">
              <div className="screen">
                <img src="https://source.unsplash.com/XRCJXVwcBCo/518x1122" alt="A preview of the app" />
              </div>
            </div>
          </div>
        </main>
      </aside>
      <section className="light">
        <main>
          <h2>Hur funkar det?</h2>
          <article>
            <h3>Välj cookalong</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi eius ex dolores excepturi libero
              dolor, repellendus earum possimus ullam vero necessitatibus! Laborum, numquam.
            </p>
          </article>
          <article>
            <h3>Fixa ingredienser</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi eius ex dolores excepturi libero
              dolor, repellendus earum possimus ullam vero necessitatibus! Laborum, numquam.
            </p>
          </article>
          <article>
            <h3>Njut av matlagningen</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi eius ex dolores excepturi libero
              dolor, repellendus earum possimus ullam vero necessitatibus! Laborum, numquam.
            </p>
          </article>
        </main>
      </section>
    </StyledApp>
  );
};
