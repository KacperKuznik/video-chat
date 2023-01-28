import { createSlice } from '@reduxjs/toolkit'

export const mutedSlice = createSlice({
    name: 'muted',
    initialState: {
      value: false
    },
    reducers: {
      toggleMuted: state => {
        state.value = !state.value
      }
    }
  })
  

  export const { toggleMuted } = mutedSlice.actions
  
  export default mutedSlice.reducer