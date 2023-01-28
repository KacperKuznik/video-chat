import { createSlice } from '@reduxjs/toolkit'

export const deafenedSlice = createSlice({
    name: 'deafened',
    initialState: {
      value: false
    },
    reducers: {
      toggleDeafened: state => {
        state.value = !state.value
      }
    }
  })
  

  export const { toggleDeafened } = deafenedSlice.actions
  
  export default deafenedSlice.reducer