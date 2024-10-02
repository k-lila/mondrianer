import React, { useState, useEffect, ReactNode } from 'react'
import { MondrianBlock } from '../mondrianBlock'
import { Grid } from './styles'
import { randNum } from '../../utils'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const randNumGrid = () => {
  return `${100 - randNum(30, 70)}% 1fr`
}

export type MondrianGridProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gridtemplate?: string
  $gap: string
  $animate?: boolean
}

export const MondrianGrid = ({ ...props }: MondrianGridProps) => {
  const [randGrid, setRandGrid] = useState(randNumGrid())
  const [duration, setduration] = useState(randNum(2500, 30000))

  const animateColor = useSelector(
    (state: RootReducer) => state.config.animateColor
  )

  useEffect(() => {
    if (props.$animate) {
      const timer1 = setInterval(() => {
        setRandGrid(randNumGrid())
      }, duration)
      return () => {
        clearInterval(timer1)
      }
    }
  })

  useEffect(() => {
    if (props.$animate) {
      const timer2 = setInterval(() => {
        const durat = randNum(60000, 120000)
        setduration(durat)
      }, duration)
      return () => {
        clearInterval(timer2)
      }
    }
  }, [duration, props.$animate])

  return (
    <Grid
      $gridtemplate={randGrid}
      $horizontal={props.$horizontal}
      $gap={props.$gap}
    >
      {props.children ? (
        props.children
      ) : (
        <>
          <MondrianBlock $animate={animateColor} />
          <MondrianBlock $animate={animateColor} />
        </>
      )}
    </Grid>
  )
}
