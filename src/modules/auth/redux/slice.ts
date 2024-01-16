import { createSlice } from "@reduxjs/toolkit"
import {initialState} from "./initialState"

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: state => {
        state.isAuthenticated = true
    },
    signOut: state => {
        state.isAuthenticated = false
    },
  }
})