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
    padding: 1vmin 2vmin;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease-in;
    width: 42%;
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
  padding: 2vmin;
  background-color: ${(props) =>
    props.$num <= 10
      ? 'rgba(255, 255, 255, 0.7)'
      : props.$num > 10 && props.$num <= 15
      ? 'rgba(234, 239, 44, 0.7)'
      : 'rgba(255, 0, 0, 0.55)'};
  margin-bottom: 1em;
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
  padding: 2vmin;
  margin-bottom: 1em;
  background-color: rgba(255, 255, 255, 0.7);
  .__gap {
    display: flex;
    justify-content: space-between;
    input {
      width: 3em;
      text-align: end;
      padding: 0.25em;
    }
    button {
      height: 2em;
      width: 2em;
      padding: 0.25em;
      margin-left: 1em;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }
  .__range {
    margin-top: 3%;
    width: 100%;
  }
  .--proportion {
    background-color: ${(props) =>
      props.$char == '%'
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)'};
  }
  .--constant {
    background-color: ${(props) =>
      props.$char == 'px'
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)'};
  }
`

export const InputCheck = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  padding: 2vmin;
  margin-bottom: 1em;
`

export const OpenMenu = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 3vmin;
  right: 3vmin;
  z-index: 1;
  opacity: ${(props) => (props.$visible ? '0.4' : '0')};
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 10vmin;
  height: 10vmin;
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
