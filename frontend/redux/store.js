import { configureStore } from '@reduxjs/toolkit'
import deafenedReducer from './features/deafenedSlice'
import mutedReducer from './features/mutedSlice'
import showCameraReducer from './features/showCameraSlice'

export default configureStore({
  reducer: {
    muted: mutedReducer,
    deafened: deafenedReducer,
    showCamera: showCameraReducer
  }
})