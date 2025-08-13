import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Tomorrow", sans-serif;

  body {
    background-color: black;
  }
  .container {
    width: 100%;
    height: 100svh;
    overflow: hidden;
    position: relative;
    &__mondrianer {
      height: 100%;
      perspective: 5000px;
      transform-style: preserve-3d;
    }
  }
`
export const Frame = styled.div`
  width: 100%;
  height: 100svh;
  background-color: transparent;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  border: 3vmin solid black;
`
