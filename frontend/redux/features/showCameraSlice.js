import { createSlice } from '@reduxjs/toolkit'

export const showCameraSlice = createSlice({
    name: 'showCamera',
    initialState: {
      value: true
    },
    reducers: {
      toggleShowCamera: state => {
        state.value = !state.value
      }
    }
  })
  

  export const { toggleShowCamera } = showCameraSlice.actions
  
  export default showCameraSlice.reducer