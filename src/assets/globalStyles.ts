import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    overflow: hidden;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
    font-family: 'Pretendard', -apple-system, sans-serif;
    font-size: 14px;
    background-color: var(--color-100);
    --color-0: #ffffff;
    --color-100: #f1f3f8;
    --color-200: #d6e0f0;
    --color-300: #b1bbd4;
    --color-400: #99a2be;
    --color-500: #8790ab;
    --color-600: #767c93;
    --color-700: #393b44;
    --color-800: #24252b;
    --color-900: #17181c;
    --color-red: #DA3F3A;
    --color-blue: #0D4E91;
    --color-green: #006E09;
    --size-100: 2px;
    --size-200: 4px;
    --size-300: 8px;
    --size-400: 16px;
    --size-500: 32px;
    --size-600: 64px;
    --size-700: 128px;
    --weight-400: 400;
    --weight-700: 700;
  }
`;

export default GlobalStyles;
