import random from 'random'
import React, { useState, useEffect, ReactNode } from 'react'
import { MondrianBlock } from '../mondrianBlock'
import { Grid } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const randNumGrid = () => {
  return `${100 - random.int(30, 70)}% 1fr`
}

export type MondrianGridProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gridtemplate?: string
  $gap: string
}

export const MondrianGrid = ({ ...props }: MondrianGridProps) => {
  const [randGrid, setRandGrid] = useState(randNumGrid())
  const [duration, setduration] = useState(random.int(1000, 3000))
  const config = useSelector((state: RootReducer) => state.config)

  useEffect(() => {
    if (config.animateGrid) {
      const timer1 = setInterval(() => {
        setRandGrid(randNumGrid())
      }, duration)
      return () => {
        clearInterval(timer1)
      }
    }
  })

  useEffect(() => {
    if (config.animateGrid) {
      const timer2 = setInterval(() => {
        const durat = random.int(config.minDelay, config.maxDelay)
        setduration(durat)
      }, duration)
      return () => {
        clearInterval(timer2)
      }
    }
  }, [duration, config.animateGrid, config.minDelay, config.maxDelay])

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
          <MondrianBlock />
          <MondrianBlock />
        </>
      )}
    </Grid>
  )
}
