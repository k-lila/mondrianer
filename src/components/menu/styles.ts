import styled from 'styled-components'

export const MenuStyled = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 3vmin;
  right: 3vmin;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2vmin;
  max-height: 90vh;
  overflow-y: auto;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.25em;
  form {
    display: flex;
    flex-direction: column;
  }
  .__container-btn {
    display: flex;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .__menu-btn {
    margin: 0 auto;
    height: 2.5em;
    width: 42%;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
`
export const Header = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  input {
    cursor: pointer;
  }
  button {
    height: 2em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
    }
  }
  label {
    margin-left: 0.5em;
  }
`

export const InputRange = styled.div<{ $num: number }>`
  padding: 0.5em 1em;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 1em;
  div {
    display: flex;
    justify-content: space-between;
    input {
      text-align: end;
      width: 3.5em;
      margin-left: 1em;
      padding: 0.25em;
    }
  }
  .__range {
    margin-top: 3%;
    width: 100%;
  }
`

export const InputGap = styled.div<{ $char: string }>`
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
  margin: 2em 0;
  background-color: rgba(255, 255, 255, 0.7);
  .__gap {
    display: flex;
    justify-content: space-between;
    input {
      width: 4em;
      text-align: end;
      padding: 0.25em;
    }
    button {
      height: 2em;
      width: 2em;
      padding: 0.25em;
      margin-left: 1em;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }
  .__range {
    margin-top: 3%;
    width: 100%;
  }
  .--proportion {
    color: ${(props) =>
      props.$char == '%' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.6)'};
    border: 1px solid
      ${(props) =>
        props.$char == '%' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
    background-color: ${(props) =>
      props.$char == '%'
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)'};
  }
  .--constant {
    color: ${(props) =>
      props.$char == 'px' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.6)'};
    border: 1px solid
      ${(props) =>
        props.$char == 'px' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
    background-color: ${(props) =>
      props.$char == 'px'
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)'};
  }
  @media screen and (max-width: 1024px) {
    .__gap {
      input {
        width: 3em;
      }
    }
  }
`

export const InputCheck = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  input {
    margin-left: 2em;
  }
`

export const OpenMenu = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 3vmin;
  right: 3vmin;
  z-index: 1;
  opacity: ${(props) => (props.$visible ? '0.2' : '0')};
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 7vmin;
  height: 7vmin;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    width: 16vmin;
    height: 16vmin;
  }
`
