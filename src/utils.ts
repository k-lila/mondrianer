import random from 'random'

export const randNum = (num1: number, num2: number) => {
  return random.int(num1, num2)
}

export const randBool = () => {
  return randNum(0, 1) === 1
}
