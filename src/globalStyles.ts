import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  *,*::before,*::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
      --red: #F35E58;
      --red-light: #FDEDED;
      --bg: #F1EEEB;
      --purple: #D4C7F0;
      --blue: #2255A5;
  }

  .title {
    font-family: monotype-grotesque-display-c,sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -.03em;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding-bottom: 6px;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--blue);
      transform: translateX(-100%);
      transition: all .4s cubic-bezier(.215,.61,.355,1);
      transition-delay: .2s;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      transform: scaleX(1);
      transform-origin: 100% 50%;
      background: var(--blue);
      transition: all .4s cubic-bezier(.215,.61,.355,1);
    }

    &:hover {
      &:before {
        transform: translateX(0);
      }

      &:after {
        transform: scaleX(0)
      }
    }
  }
 
  body {
    font-size: 16px;
    overflow: hidden !important;
    font-family: monotype-grotesque,sans-serif;
    color: var(--blue);
  }
`;
 
export default GlobalStyle;