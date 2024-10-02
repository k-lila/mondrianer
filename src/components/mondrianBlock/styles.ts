import styled from 'styled-components'

export const Block = styled.div.attrs<{ $bgcolor: string; $opacity: string }>(
  (props) => ({
    style: {
      backgroundColor: props.$bgcolor,
      opacity: props.$opacity
    }
  })
)`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in;
`
