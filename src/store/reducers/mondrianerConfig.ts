import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MondrianerState = {
  recursion: number
  layers: number
  gap: string
  animateColor: boolean
  animateGrid: boolean
  animateDepth: boolean
  transparency: number
  minDelay: number
  maxDelay: number
  trigger: number
  refresher: number
  perspective: number
  height: number
}

const initialState: MondrianerState = {
  recursion: 7,
  trigger: 5,
  layers: 5,
  gap: '0px',
  animateColor: true,
  animateGrid: false,
  animateDepth: true,
  transparency: 2,
  minDelay: 10000,
  maxDelay: 120000,
  refresher: 0,
  perspective: 100000,
  height: 100 * -100
}

const mondrianerSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setRecursion: (state, action: PayloadAction<number>) => {
      state.recursion = action.payload
    },
    setGap: (state, action: PayloadAction<string>) => {
      state.gap = action.payload
    },
    setAnimateGrid: (state, action: PayloadAction<boolean>) => {
      state.animateGrid = action.payload
    },
    setAnimateColor: (state, action: PayloadAction<boolean>) => {
      state.animateColor = action.payload
    },
    setAnimateDepth: (state, action: PayloadAction<boolean>) => {
      state.animateDepth = action.payload
    },
    setTrigger: (state, action: PayloadAction<number>) => {
      state.trigger = action.payload
    },
    refresher: (state, action: PayloadAction<number>) => {
      state.refresher = action.payload
    },
    setTransparency: (state, action: PayloadAction<number>) => {
      state.transparency = action.payload
    },
    setLayers: (state, action: PayloadAction<number>) => {
      state.layers = action.payload
    }
  }
})

export const {
  setRecursion,
  setGap,
  setAnimateGrid,
  setAnimateColor,
  setAnimateDepth,
  setTrigger,
  refresher,
  setTransparency,
  setLayers
} = mondrianerSlice.actions
export default mondrianerSlice.reducer
