import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';

export const GlobalStyles = css`
  ${modernNormalizeCss}
  :root {
    --font-primary: 'Roboto', sans-serif;
    --color-bg-primary: #ffffff;
    --color-text-light: #ffffff;
    --color-text-dark: #000000;
    --color-text-secondary: #8c8c8c;
    --color-text-footer: #545454;
    --color-card__text: #ff6b08;
    --color-error: #ff001b;
    --color-accent: #ff6b01;
    --cubic: cubic-bezier(0.4, 0, 0.2, 1);
  }

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--color-bg-primary);
    color: var(--color-text-light);
    padding: 0;
    margin: 0;
  }

  body.stop-scroll {
    height: 100vh;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
  }

  textarea {
    resize: none;
  }
`;

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const DarkSection = styled.section`
  background-color: #252d31;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const LightSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Main = styled.main`
  min-height: calc(100vh - 178px);
`;

export const MainTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1.17;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
