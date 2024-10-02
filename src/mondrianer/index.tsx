import { ReactElement, useState } from 'react'
import { MondrianBlock } from '../components/mondrianBlock'
import { MondrianGrid } from '../components/mondrianGrid'
import { randBool } from '../utils'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { MondrianerContainer } from './styles'

export const Mondrianer = () => {
  const recursion = useSelector((state: RootReducer) => state.config.recursion)
  const gap = useSelector((state: RootReducer) => state.config.gap)
  const triggerNum = useSelector((state: RootReducer) => state.config.trigger)
  const animateGrid = useSelector(
    (state: RootReducer) => state.config.animateGrid
  )
  const animateColor = useSelector(
    (state: RootReducer) => state.config.animateColor
  )
  const refresh = useSelector((state: RootReducer) => state.config.refresher)

  const recursive = (
    num: number,
    horizontal: boolean,
    counter: number
  ): ReactElement => {
    const trigger = counter >= triggerNum
    if (num === 0) {
      return <MondrianBlock $animate={animateColor} />
    }
    return (
      <MondrianGrid $horizontal={horizontal} $gap={gap} $animate={animateGrid}>
        {trigger && randBool() ? (
          randBool() ? (
            recursive(num - 1, !horizontal, counter + 1)
          ) : (
            <MondrianBlock $animate={animateColor} />
          )
        ) : (
          recursive(num - 1, !horizontal, counter + 1)
        )}
        {trigger && randBool() ? (
          randBool() ? (
            recursive(num - 1, !horizontal, counter + 1)
          ) : (
            <MondrianBlock $animate={animateColor} />
          )
        ) : (
          recursive(num - 1, !horizontal, counter + 1)
        )}
      </MondrianGrid>
    )
  }
  return (
    <MondrianerContainer key={refresh}>
      {recursive(recursion, randBool(), 0)}
    </MondrianerContainer>
  )
}
