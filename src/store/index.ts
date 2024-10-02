import { configureStore } from '@reduxjs/toolkit'
import configReducer from './reducers/mondrianerConfig'

const store = configureStore({
  reducer: {
    config: configReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
