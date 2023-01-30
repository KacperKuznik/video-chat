import { createSlice } from '@reduxjs/toolkit'

export const showSidebarSlice = createSlice({
    name: 'showSidebar',
    initialState: {
      value: ""
    },
    reducers: {
      closeSidebar: state => {
        state.value = ""
      },
      showSidebarChat: state => {
        state.value = "chat"
      },
      showSidebarParticipants: state => {
        state.value = "participants"
      }
    }
  })
  

  export const { closeSidebar, showSidebarChat, showSidebarParticipants } = showSidebarSlice.actions
  
  export default showSidebarSlice.reducer