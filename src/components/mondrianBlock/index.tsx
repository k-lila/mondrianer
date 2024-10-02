import random from 'random'
import { useEffect, useState } from 'react'
import { Block } from './styles'
import { randNum } from '../../utils'

const randColor = () => {
  const palette = [
    '#314290',
    '#4A71C0',
    '#F1F2ED',
    '#F0D32D',
    '#AB3A2C',
    'transparent'
  ]
  return palette[random.int(0, palette.length - 1)]
}

type MondrianBlockProps = {
  $animate: boolean
}

export const MondrianBlock = ({ $animate }: MondrianBlockProps) => {
  const [background, setbackground] = useState('black')
  const [opacity, setOpacity] = useState(`0`)
  const [duration, setduration] = useState(randNum(500, 3000))

  useEffect(() => {
    if (!$animate) {
      setTimeout(() => {
        setbackground(randColor())
        setOpacity(`0.${randNum(25, 99)}`)
        return
      }, duration)
    } else {
      const timer = setInterval(() => {
        setbackground(randColor())
        setOpacity(`0.${randNum(25, 99)}`)
      }, duration)
      return () => {
        clearInterval(timer)
      }
    }
  }, [$animate, duration])

  useEffect(() => {
    if (!$animate) {
      return
    } else {
      const timer = setInterval(() => {
        setduration(randNum(10000, 30000))
      }, duration)
      return () => {
        clearInterval(timer)
      }
    }
  }, [$animate, duration])

  return <Block $bgcolor={background} $opacity={opacity} />
}
