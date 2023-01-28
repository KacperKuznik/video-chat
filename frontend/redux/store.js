import { configureStore } from '@reduxjs/toolkit'
import deafenedReducer from './features/deafenedSlice'
import mutedReducer from './features/mutedSlice'

export default configureStore({
  reducer: {
    muted: mutedReducer,
    deafened: deafenedReducer
  }
})