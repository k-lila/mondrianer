import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MondrianerState = {
  recursion: number
  gap: string
  animateColor: boolean
  animateGrid: boolean
  trigger: number
  refresher: number
}

const initialState: MondrianerState = {
  recursion: 8,
  gap: '5%',
  animateColor: true,
  animateGrid: true,
  trigger: 3,
  refresher: 0
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
    setTrigger: (state, action: PayloadAction<number>) => {
      state.trigger = action.payload
    },
    refresher: (state, action: PayloadAction<number>) => {
      state.refresher = action.payload
    }
  }
})

export const {
  setRecursion,
  setGap,
  setAnimateGrid,
  setAnimateColor,
  setTrigger,
  refresher
} = mondrianerSlice.actions
export default mondrianerSlice.reducer
