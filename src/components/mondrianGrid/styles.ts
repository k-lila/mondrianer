import styled from 'styled-components'
import { MondrianGridProps } from '.'

export const Grid = styled.div.attrs<MondrianGridProps>((props) => ({
  style: {
    gap: props.$gap,
    gridTemplateColumns: props.$horizontal ? '1fr' : props.$gridtemplate,
    gridTemplateRows: props.$horizontal ? props.$gridtemplate : '1fr'
  }
}))`
  height: 100%;
  width: 100%;
  display: grid;
  transition: all 0.5s ease-in;
`
