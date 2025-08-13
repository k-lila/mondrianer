import random from 'random'
import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { MondrianerContainer } from './styles'
import { RootReducer } from '../../store'
import { MondrianBlock } from '../../components/mondrianBlock'
import { MondrianGrid } from '../../components/mondrianGrid'

export const Mondrianer = () => {
  const recursion = useSelector((state: RootReducer) => state.config.recursion)
  const gap = useSelector((state: RootReducer) => state.config.gap)
  const triggerNum = useSelector((state: RootReducer) => state.config.trigger)
  const refresh = useSelector((state: RootReducer) => state.config.refresher)

  const recursive = (
    num: number,
    horizontal: boolean,
    counter: number
  ): ReactElement => {
    const trigger = counter >= triggerNum
    if (num === 0) {
      return <MondrianBlock />
    }
    return (
      <MondrianGrid $horizontal={horizontal} $gap={gap}>
        {trigger && random.bool() ? (
          random.bool() ? (
            recursive(num - 1, !horizontal, counter + 1)
          ) : (
            <MondrianBlock />
          )
        ) : (
          recursive(num - 1, !horizontal, counter + 1)
        )}
        {trigger && random.bool() ? (
          random.bool() ? (
            recursive(num - 1, !horizontal, counter + 1)
          ) : (
            <MondrianBlock />
          )
        ) : (
          recursive(num - 1, !horizontal, counter + 1)
        )}
      </MondrianGrid>
    )
  }
  return (
    <MondrianerContainer key={refresh}>
      {recursive(recursion, random.bool(), 0)}
    </MondrianerContainer>
  )
}
