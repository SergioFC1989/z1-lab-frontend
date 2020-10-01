import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    margin:0;
    padding: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding:0;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  html {
    box-sizing: border-box;
}

/* allow easy overriding of box-sizing */
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }


  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #E5E5E5;
    text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }
`
export default GlobalStyle;