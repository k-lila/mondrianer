import styled from 'styled-components'

export const Block = styled.div.attrs<{
  $bgcolor: string
  $opacity: string
  $height: string
}>((props) => ({
  style: {
    backgroundColor: props.$bgcolor,
    opacity: props.$opacity,
    transform: props.$height
  }
}))`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in;
`
