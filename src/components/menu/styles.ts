import styled, { keyframes } from 'styled-components'

export const MenuStyled = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 3vmin;
  right: 3vmin;
  z-index: 1;
  background-color: rgba(200, 200, 200, 0.9);
  padding: 2vmin;
  form {
    display: flex;
    flex-direction: column;
  }

  .__close-menu {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
    span {
      font-size: 1.25em;
    }
  }

  .__menu-item {
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: space-between;
    margin: 10px 0;
    padding: 1vmin;
    input {
      width: 3em;
      text-align: center;
      margin-left: 1em;
    }
  }
  .__container-btn {
    display: flex;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .__menu-btn {
    margin: 0 auto;
    padding: 1vmin 2vmin;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.5s ease-in;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
`

const fadeOut = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`

export const OpenMenu = styled.button`
  position: absolute;
  top: 2vmin;
  right: 2vmin;
  z-index: 1;
  opacity: 0;
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;
  border: none;
  animation: ${fadeOut} 1.5s ease-out;
  span {
    font-size: 10vmin;
    color: white;
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 20vmin;
      color: white;
    }
  }
`
