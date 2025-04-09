import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}

/* Set html and body to full height */
html, body {
  height: 100%;
  overscroll-behavior: none;
}

/* Body styling with a subtle gradient option */
body {
  display: flex;
  flex-direction: column;
  // background-color:rgb(218, 218, 218);
  /* Uncomment below for a gradient background */
  background: linear-gradient(135deg, #242424, #1a1a1a);
  background-attachment: fixed;
  background-repeat: no-repeat;
}

/* Root container takes the full height */
#root {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Main section taking up available space */
main {
  flex: 1;
}

/* Additional typographic enhancements */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
`;
