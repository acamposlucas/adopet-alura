import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --marginInline: clamp(2rem, 6rem, 15rem);
  }

html, body {
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSize["text-base"]};
}
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
  font: inherit; /* Removes font size and weight from headings, form elements inherit font */
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

body,
html {
  height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5; /* It might need to be changed */
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
