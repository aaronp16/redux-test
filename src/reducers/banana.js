import { createSlice } from '@reduxjs/toolkit'

export const bananaSlice = createSlice({
  name: 'banana',
  initialState: {
    value: 'banana',
  }
})

export default bananaSlice.reducer