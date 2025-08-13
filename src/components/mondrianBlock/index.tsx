import random from 'random'
import { useEffect, useState } from 'react'
import { Block } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const randColor = (transparency: number) => {
  const palette = ['#314290', '#4A71C0', '#F1F2ED', '#F0D32D', '#AB3A2C']
  if (random.int(0, 10) > transparency) {
    return palette[random.int(0, palette.length - 1)]
  } else {
    return 'transparent'
  }
}

export const MondrianBlock = () => {
  const [background, setbackground] = useState('black')
  const [opacity, setOpacity] = useState(`0`)
  const [height, setHeight] = useState(0)
  const [durationA, setdurationA] = useState(random.int(500, 3000))
  const [durationB, setdurationB] = useState(random.int(500, 3000))
  const config = useSelector((state: RootReducer) => state.config)

  useEffect(() => {
    if (!config.animateColor) {
      setTimeout(() => {
        setbackground(randColor(config.transparency))
        setOpacity(`0.${random.int(25, 99)}`)
        return
      }, durationA)
    } else {
      const timer = setInterval(() => {
        setbackground(randColor(config.transparency))
        setOpacity(`0.${random.int(25, 99)}`)
      }, durationA)
      return () => {
        clearInterval(timer)
      }
    }
  }, [config.animateColor, durationA, config.transparency])

  useEffect(() => {
    if (!config.animateColor) {
      return
    } else {
      const timer = setInterval(() => {
        setdurationA(random.int(config.minDelay, config.maxDelay))
      }, durationA)
      return () => {
        clearInterval(timer)
      }
    }
  }, [config.animateColor, durationA, config.minDelay, config.maxDelay])

  useEffect(() => {
    if (!config.animateDepth) {
      setTimeout(() => {
        setHeight(random.int(0, config.height))
        return
      }, durationB)
    } else {
      const timer = setInterval(() => {
        setHeight(random.int(0, config.height))
      }, durationB)
      return () => {
        clearInterval(timer)
      }
    }
  }, [config.animateDepth, config.height, durationB])

  useEffect(() => {
    if (!config.animateDepth) {
      return
    } else {
      const timer = setInterval(() => {
        setdurationB(random.int(config.minDelay, config.maxDelay))
      }, durationB)
      return () => {
        clearInterval(timer)
      }
    }
  }, [config.animateDepth, durationB, config.minDelay, config.maxDelay])

  return (
    <Block
      $bgcolor={background}
      $opacity={opacity}
      $height={`translateZ(${height}px)`}
    />
  )
}
