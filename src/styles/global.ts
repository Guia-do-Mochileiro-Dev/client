import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.tff') format('tff');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.tff') format('tff');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.tff') format('tff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    html, body, #__next {
    height: 100%;
  }


  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
    }
  `}
`
