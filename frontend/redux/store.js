import { configureStore } from '@reduxjs/toolkit'
import deafenedReducer from './features/deafenedSlice'
import mutedReducer from './features/mutedSlice'
import showCameraReducer from './features/showCameraSlice'
import showSidebarReducer from './features/showSidebarSlice'


export default configureStore({
  reducer: {
    muted: mutedReducer,
    deafened: deafenedReducer,
    showCamera: showCameraReducer,
    showSidebar: showSidebarReducer,
  }
})